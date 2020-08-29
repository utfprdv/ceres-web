import styled from 'styled-components';

export const Grid = styled.section`
    margin-top: 15px;
    column-cont: 2;
    column-gap: 1px;
`;

export const Product = styled.article`
    background-color: #ffffff;
    width: 100%;
    heigt: auto;
    display: inline-flex;
    border-radius: 5px;
    margin: 0 0 8px;
    
    img {
        margin: 2px 0 0 3px;
        border-radius: 5px;
        width: 80px;
        height: 60px;
        object-fit: cover;
    }
    
    h3 {
        padding: 15px 15px 5px 15px;
    }
    
    h4 {
        font-size: 12px;
        margin: 15 15px 25px 0;
        padding: 2px 5px 2px 5px;
    }

    h5 {
        position: absolute;
        margin-left: 70%;
        margin-top: 20px;
        padding: 20px 50px 2px 5px;
        background: url('https://api.iconify.design/icomoon-free:pencil.svg') no-repeat center center / contain;
    }
    
    h6 {
    position: absolute;
    display: inline-block;
    background-color: #f69651;
    font-size: 10px;
    border-radius: 5px;
    margin-left: 80%;
    margin-top: 20px;
    padding: 20px 50px 2px 5px;
    background: url('https://api.iconify.design/icomoon-free:bin.svg') no-repeat center center / contain;
    vertical-align: -0.125em;
}

`;