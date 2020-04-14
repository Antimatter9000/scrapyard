export default function formatCookie() {
    const cookie = {};
    document.cookie.split('; ').forEach(item => {
        const key = item.slice(0, item.indexOf('='));
        const value = item.slice(item.indexOf('=') + 1);
        cookie[key] = value;
    });
    return cookie;
}