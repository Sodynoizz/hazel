# Hazel—Clubs Data Processing Framework

Use Hazel to deal with complex data without hustle.

## Prerequisite
<p>
Current built-in data source is Firebase Firestore. To establish the connection <b>.env</b> is required with the format as shown below.
</p>

### .env File

```dotenv
FCERT_CLIENT_EMAIL=
FCERT_PROJECT_ID=
FCERT_PRIVATE_KEY=
```

### Important note

- Default exported data directory is `./resource`, which git ignored by default. To avoid accidentally exposing any data, this directory should not be added to the public repository.
- To utilize the `studentInfo` snippet effectively, ensure you're operating on a **Linux system**. Otherwise, the `readline-sync` package may encounter compatibility issues with UTF-8 encoding.

## Documentation
<a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/triamudomcmc/hazel/main/docs/modules.html">Documentation is here :)</a>

<br/>
Made with ♥ by TUCMC

