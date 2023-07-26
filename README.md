## Deploying Revision to GCP

- use `gcloud builds submit --tag gcr.io/ageofinfo-gcp/age-of-info` for updating image (adds a new revision)
- then edit/deploy new revision and select it from gcp dashboard

## Data Updating Process

1. Update main AOE2:DE Data Spreadsheet
2. Download it as `.csv`
3. Convert to JSON here https://www.convertcsv.com/csv-to-json.htm (default settings, CLRF line endings)
4. Place in `/data/` folder

## TODO/Ideas

- Paiks research time unknown

## Ideas

- Use `<Chip>` components for armor classes

## Other

- https://dev.to/johannesvitt/deploy-a-react-app-on-gcp-with-google-cloud-run-il3
