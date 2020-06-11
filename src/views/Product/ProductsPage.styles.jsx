import styled from 'styled-components';

const ProductPageConatiner = styled.div `
    background-color: pink;
    width: 100vw;
    height: calc(100vh - 124px); /*Header + Footer height*/

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TopSection = styled.div `
    background-color: purple;
    width: calc(100vw - 20px);
    height: 60px;
    margin-top: 20px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const BottomSection = styled.div `
    background-color: salmon;
    width: calc(100vw - 20px);
    height: fit-content;
    flex: 1;

    overflow: auto;

    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-items: center;
`;

export { ProductPageConatiner, TopSection, BottomSection };