# ngrx-simpler-boilerplate

[![Build Status](https://travis-ci.org/ngnam/ngrx-simpler-boilerplate.svg?branch=master)](https://travis-ci.org/ngnam/ngrx-simpler-boilerplate)

## Benefits

- A project use ngrx simpler boilerplate load users from component use dispatch action
- Dispatch action from component,
- Reducer function pupe
- Selector State
- Effect actions
- Handler error from effect -> action
- Used Best practice boilerplate
- Used @ngrx/{store, effects, entities, store-devtools}
- Used Angular 7+

## Run

```
    npm install &&  npm start
```

## deploy to github

```

🌹  npm install -g angular-cli-ghpages
🌹  ng build --prod --base-href https://[username].github.io/[repo]/
🌹  npx ngh --repo=https://GH_TOKEN@github.com/organisation/your-repo.git --dir=dist/[project-name]
🌹  git checkout -b gh-pages
🌹  git push origin gh-pages
```
