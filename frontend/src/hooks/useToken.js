import axios from 'axios';
import React, { useEffect, useState } from 'react'

function useToken() {
    const tokenData = sessionStorage.getItem('token') || null;
       
    return tokenData;
}


export default useToken