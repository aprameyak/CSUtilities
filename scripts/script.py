import requests
import csv
from io import StringIO

GITHUB_RAW_BASE = "https://raw.githubusercontent.com/liquidslr/leetcode-company-wise-problems/main"

companies = ["Amazon", "Google", "Facebook"]
durations = ["30-days.csv", "60-days.csv"]

all_data = []

for company in companies:
    for csv_file in durations:
        url = f"{GITHUB_RAW_BASE}/{company}/{csv_file}"
        try:
            res = requests.get(url)
            res.raise_for_status()
            csv_content = res.text
            reader = csv.DictReader(StringIO(csv_content))
            for row in reader:
                row["Company"] = company
                all_data.append(row)
            print(f"✅ Fetched {company}/{csv_file}")
        except requests.exceptions.RequestException:
            print(f"⚠️  Skipped missing or invalid file: {company}/{csv_file}")

# Write aggregated output
with open("leetcode_all_companies.csv", "w", newline='', encoding='utf-8') as f:
    writer = csv.DictWriter(f, fieldnames=[
        "Company", "Difficulty", "Title", "Frequency", "Acceptance Rate", "Link", "Topics"
    ])
    writer.writeheader()
    writer.writerows(all_data)

print("✅ Aggregated CSV saved as leetcode_all_companies.csv")
