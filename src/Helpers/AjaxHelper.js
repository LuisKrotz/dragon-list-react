export const AjaxHelper = (url, method, data) => {
    let request = {
        loading: false,
        response: null,
        error: false
    },
    headers = {
        method: method
    };

    if (method === 'POST' || method === 'PUT') {
        headers.headers = { 'Content-Type': 'application/json' };
        headers.body = JSON.stringify(data);
    }

    fetch(url, headers)
        .then((res) => {
            return res.json();

            }).then((data) => {
                request = {
                    loading: false,
                    response: data,
                    error: false
                };

                console.log(data);
            })
            .catch((err) => {
                request = {
                    loading: false,
                    response: null,
                    error: true
                };

                console.log(err)
            });
    
    console.log(request)

    return request
}
