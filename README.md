## AgeOfInfo Production URL

- https://react-with-cloudrun-ijknireb5a-ue.a.run.app/

## Deploying Revision to GCP (CI/CD)

- Merge latest code into `main` for deployment
- Create a new release tag
- This will trigger the GCP Cloud Build and update the Cloud Run service with the new build

## Deploy Revision to GCP manually (requires setting revision active in GCP)

- Merge latest code into `main` for deployment
- Use `gcloud builds submit --tag gcr.io/ageofinfo-gcp/age-of-info` for updating image (adds a new revision) to the `react-with-cloudrun` service
- To divert traffic to this revision, select the `react-with-cloudrun` service -> Edit/Deploy New Revision and select the build tagged (latest) from the list

## Data Updating Process

1. Update main AOE2:DE Data Spreadsheet
2. Download it as `.csv`
3. Convert to JSON here https://www.convertcsv.com/csv-to-json.htm (default settings, CLRF line endings)
4. Place in `/data/` folder

## Node Version Notes

- Uses `node v18.7.0`
- `.nvmrc` exists but `nvm use` does not work as a command on Windows when using "NVM for Windows"

## Run the app locally

- Use `npm start`

## Scripts

- Use `npm run testdev` to run tests and watch for a single file. Update the test directory in `package.json`` to swap files
