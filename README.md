# News Veiwer API

This is an Express REST API service for [`News Viewer`](https://github.com/hseoy/news-veiwer)

## Table of content

- [Technologies](#technologies)
- [Install and Run](#install-and-run)
- [Usage](#usage)

## Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [News API](https://newsapi.org/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Install and Run

1. Clone this repository

```
$ git clone https://github.com/hseoy/news-viewr-api
```

2. Get the API key from [here](https://newsapi.org/). Then modify the .env.dev

```
API_KEY=YOUR_API_KEY
```

3. Install dependencies

```
$ yarn install
```

4. Start the server

```
$ yarn start:dev
```

## Usage

### `GET /` API for testing

Return:

```
"news-veiwer api"
```

### `GET /news` API to get news headlines

Queries :
|query|description|is required|
|:---:|---|:---:|
|`country`|The 2-letter ISO 3166-1 code of the country you want to get headlines for.|`yes`|
|`category`|The category you want to get headlines for.|`no`|

Return:

```json
{
  "articles": [
    {
      "source": {
        "id": null,
        "name": "..."
      },
      "author": "...",
      "title": "...",
      "description": "...",
      "url": "...",
      "urlToImage": "...",
      "publishedAt": "...",
      "content": "..."
    }
  ]
}
```
