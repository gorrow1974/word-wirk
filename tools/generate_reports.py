import json
from pathlib import Path
from datetime import datetime
import pandas as pd

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data" / "cles_data_2026-05-17_reflected.json"

def main():
    if not DATA.exists():
        raise FileNotFoundError(DATA)
    data = json.loads(DATA.read_text(encoding="utf-8"))
    attempts = data.get("attempts", [])
    df = pd.DataFrame(attempts)
    if df.empty:
        print("no attempts")
        return
    # This repo currently ships prebuilt static pages.
    # Extend this script when new data naming is finalized.
    print(f"loaded {len(df)} attempts at {datetime.now().isoformat(timespec='seconds')}")

if __name__ == "__main__":
    main()
