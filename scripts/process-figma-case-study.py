#!/usr/bin/env python3
"""Process raw Figma MCP exports into case study content components."""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPLACEMENTS = {
    "var(--gray\\/600,#4b5563)": "var(--gray-600)",
    "var(--gray\\/900,#111827)": "var(--gray-900)",
    "var(--gray\\/700,#374151)": "var(--gray-700)",
    "var(--gray\\/50,#f9fafb)": "var(--gray-50)",
    "var(--gray\\/100,#f3f4f6)": "var(--gray-100)",
    "var(--gray\\/200,#e5e7eb)": "var(--gray-200)",
    "var(--gray-\\/default,white)": "var(--gray-default)",
    "var(--bg\\/lila,rgba(175,82,222,0.24))": "var(--bg-lila)",
    "var(--labels\\/secondary,rgba(60,60,67,0.6))": "var(--labels-secondary)",
    "var(--grays\\/gray,#8e8e93)": "var(--labels-secondary)",
    "var(--sds-color-background-default-secondary,#f5f5f5)": "var(--breadcrumb-bg)",
    "var(--display-small\\/font,'Roboto:Regular')": "var(--font-display)",
    "var(--display-small\\/line-height,44px)": "var(--display-line-height)",
    "var(--display-small\\/size,36px)": "var(--display-size)",
    "var(--display-medium\\/tracking,0px)": "var(--display-tracking)",
    "var(--headline-large\\/font,'Roboto:Regular')": "var(--font-display)",
    "var(--headline-large\\/line-height,40px)": "var(--headline-line-height)",
    "var(--headline-large\\/size,32px)": "var(--headline-size)",
    "var(--headline-large\\/tracking,0px)": "var(--display-tracking)",
    "pt-[var(--sds-size-space-2400,96px)]": "pt-[96px]",
    "shrink-0 w-[1152px]": "shrink-0 w-full max-w-[1152px]",
    "relative shrink-0 w-[634px]": "relative shrink-0 w-full max-w-[634px]",
    "relative shrink-0 w-[582px]": "relative shrink-0 w-full max-w-[582px]",
}


def clean(text: str) -> str:
    text = re.sub(r"\s*font-\['Inter:[^']+'\]\s*", " ", text)
    text = re.sub(r" style=\{\{ fontVariationSettings: '[^']+' \}\}", "", text)
    for old, new in REPLACEMENTS.items():
        text = text.replace(old, new)
    text = re.sub(
        r"font-\[family-name:var\(--font-display\)\] font-normal leading-\[var\(--display-line-height\)\] relative shrink-0 text-\[color:var\(--gray-600\)\] text-\[length:var\(--display-size\)\] text-center tracking-\[var\(--display-tracking\)\]",
        "font-[family-name:var(--font-display)] font-normal leading-[var(--display-line-height)] relative shrink-0 text-[color:var(--gray-600)] text-[length:var(--display-size)] text-center tracking-[var(--display-tracking)]",
        text,
    )
    text = re.sub(
        r"font-\[family-name:var\(--font-display\)\] font-normal leading-\[var\(--headline-line-height\)\] min-w-full relative shrink-0 text-\[color:var\(--gray-600\)\] text-\[length:var\(--headline-size\)\] text-center tracking-\[var\(--display-tracking\)\] w-\[min-content\]",
        "font-[family-name:var(--font-display)] font-normal leading-[var(--headline-line-height)] min-w-full relative shrink-0 text-[color:var(--gray-600)] text-[length:var(--headline-size)] text-center tracking-[var(--display-tracking)] w-full",
        text,
    )
    text = re.sub(
        r"bg-\[var\(--gray-default\)\] content-stretch flex items-start overflow-clip relative rounded-\[12px\]",
        "bg-[var(--gray-default)] content-stretch flex flex-col lg:flex-row items-start overflow-clip relative rounded-[12px]",
        text,
    )
    return text


def extract_container(raw: str) -> str:
    match = re.search(
        r'(<div className="content-stretch flex flex-col gap-\[48px\].*?</div>\s*</div>\s*)(?=<div className="content-stretch flex flex-col items-start pt-\[)',
        raw,
        re.DOTALL,
    )
    if not match:
        raise ValueError("Could not find case study container in raw export")
    return match.group(1).strip()


def process(raw_path: Path, component_name: str, out_path: Path) -> None:
    raw = raw_path.read_text()
    container = extract_container(raw)
    container = clean(container)

    image_block = ""
    image_match = re.search(r"(const img\w+ = .*?;\n)+", raw)
    if image_match:
        image_block = image_match.group(0)

    output = f"""{image_block}
export function {component_name}() {{
  return (
    {container}
  );
}}
"""
    out_path.write_text(output)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Usage: process-figma-case-study.py <raw.tsx> <ComponentName> <out.tsx>")
        sys.exit(1)
    process(Path(sys.argv[1]), sys.argv[2], Path(sys.argv[3]))
