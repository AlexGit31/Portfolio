#!/usr/bin/env python3
"""
Génère manifest.json à partir des fichiers présents dans photos/.

Tri : par date du commit Git qui a introduit chaque fichier, du plus récent
au plus ancien. Les dernières photos poussées apparaissent en haut.
Aucune métadonnée EXIF requise.

Si Git n'est pas disponible (exécution locale hors repo), on retombe sur mtime.
"""

from __future__ import annotations

import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PHOTOS_DIR = ROOT / "photos"
MANIFEST_PATH = ROOT / "manifest.json"

ALLOWED_EXT = {".jpg", ".jpeg", ".png", ".webp", ".avif", ".gif"}


def git_added_time(rel_path: str) -> float | None:
    """Timestamp du commit qui a introduit le fichier (suit les renames)."""
    try:
        out = subprocess.run(
            [
                "git", "-C", str(ROOT), "log",
                "--diff-filter=A", "--follow",
                "--format=%ct", "--", rel_path,
            ],
            capture_output=True, text=True, check=True,
        )
        lines = [l.strip() for l in out.stdout.strip().splitlines() if l.strip()]
        if not lines:
            return None
        return float(lines[-1])
    except (subprocess.CalledProcessError, FileNotFoundError):
        return None


def collect_photos() -> list[dict]:
    if not PHOTOS_DIR.exists():
        return []

    entries = []
    for path in sorted(PHOTOS_DIR.iterdir()):
        if not path.is_file() or path.name.startswith("."):
            continue
        if path.suffix.lower() not in ALLOWED_EXT:
            continue

        rel = f"photos/{path.name}"
        ts = git_added_time(rel)
        if ts is None:
            ts = path.stat().st_mtime  # fallback local
        entries.append({"name": path.name, "src": rel, "ts": ts})

    entries.sort(key=lambda e: e["ts"], reverse=True)
    return [{"name": e["name"], "src": e["src"]} for e in entries]


def main() -> None:
    photos = collect_photos()
    manifest = {
        "generated_at": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "count": len(photos),
        "photos": photos,
    }
    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"[manifest] {len(photos)} photos -> {MANIFEST_PATH.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
