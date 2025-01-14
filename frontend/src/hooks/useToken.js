function useToken() {
    const tokenData = sessionStorage.getItem('token') || null;

    return `Bearer ${tokenData}`;
}


export default useToken