// fetch(url)
//     .then((response) => response.json())
//     .then((body) => console.log(body))
//     .catch((error) => console.error(error))
//     .finally(() => { console.log('Done.') });

async function fetchFromServer() {
    try {
        const response = await fetch(url);
        const body = await response.json();
        const a = null;
        a.x = 3;
        return body;
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        console.log('Done.');
    }
}

async function fetchFromServer() {
    const response = await fetch(url);
    const body = await response.json();
    const a = null;
    a.x = 3;
    return body;
}

fetchFromServer()
    .then(body => console.log(body))
    .catch((error) => console.error(error));

async function fetchTwoResources() {
    const [result1, result2] = await Promise.all([fetch(url1), fetch(url2)])
}