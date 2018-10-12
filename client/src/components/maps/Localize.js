const geolocalize = () => {
    return new Promise((resolve, reject) => {
        const geo = window.navigator.geolocation;
        if (!geo) reject('No geolocation available');
        geo.getCurrentPosition((pos) => {
            const center = {
                lat: pos.coords.latitude,
                lng: pos.coords.longitude
            };
            resolve(center);
        }, reject);
    });

};

module.exports = geolocalize;