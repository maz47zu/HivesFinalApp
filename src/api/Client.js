export async function getActiveHives() {
    return fetch('http://51.68.141.235:8088/hives', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': authHeader(username, password),
        }
    })
        .then(res => res.json())
        .then(response => {
            return response
        });
}

export async function getHiveHistory(hiveId) {
    const url = 'http://51.68.141.235:8088/history/hive/' + hiveId.toString();
    return fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': authHeader(username, password),
        }
    })
        .then(res => res.json())
        .then(response => {
            return response
        });
}