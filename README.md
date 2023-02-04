made with the only tutorial that actually worked even though it still was dog shit https://dev.to/johannesvitt/deploy-a-react-app-on-gcp-with-google-cloud-run-il3

- use `gcloud builds submit --tag gcr.io/ageofinfo-gcp/react-with-cloudrun` for updating image (adds a new revision)
- then edit/deploy new revision and select it from gcp dashboard

## Data Updating Process

1. Update main AOE2:DE Data Spreadsheet
2. Download it as `.csv`
3. Convert to JSON here https://www.convertcsv.com/csv-to-json.htm (default settings, CLRF line endings)
4. Place in `/data/` folder

## TODO/Ideas

- Update data (1 or 2 small patches behind)
- Use `<Chip>` components for shit like armor classes
- Restore dashboard side panel and implement routing with it
- Add data tables for each data set on their own route
