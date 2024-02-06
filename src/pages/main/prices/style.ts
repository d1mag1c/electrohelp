import styled from "styled-components";

export const PricesBlock = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0 auto;
    padding: 120px 30px;
    max-width: 1200px;

    h1 {
        font-size: 50px;
        font-family: Orelega_One, 'sans-serif';
        font-weight: normal;
        margin: 0 auto 50px;
        width: 100%;
        text-align: center;
    }

    table {

        border-radius: 10px;
        border-collapse: collapse;
        caret-color: rgba(255, 255, 255, 0);
        width: 90%;

        tr:nth-child(even) {
            background-color: #e7e7e7;
        }

        tr:first-child, th:first-child {
            width: 60%;
        }

        tr:nth-child(2), tr:nth-child(3), th:nth-child(2), th:nth-child(3) {
            min-width: 80px;
        }

        tr {
            height: 40px;
        }

        th {
            border-top: 1px solid #777777;
            border-bottom: 1px solid #777777;
            box-shadow: inset 0 1px 0 #999999, inset 0 -1px 0 #999999;
            background: linear-gradient(#7f87b7, #00318c);
            color: white;
            padding: 10px;
            height: 50px;
            font-size: 18px;
        }

        td {
            text-align: center;
            padding: 10px;
        }

        td:first-child {
            text-align: left;
            padding-left: 15px;
        }

        .table_rough_work {

            td {
                text-align: center;
                font-size: 20px;
                height: 50px;
                background: linear-gradient(#cfd6ff, #e7e7e7);
                font-weight: bold;
            }
        }

        .table_finishing_work {

            td {
                text-align: center;
                font-size: 20px;
                height: 50px;
                background: linear-gradient(rgba(227, 227, 227, 0.51), #e7e7e7);
                border-top: 1px solid black;
                font-weight: bold;
            }
        }

    }

    @media (max-width: 600px) {
        padding: 100px 30px;
        h1 {
            font-size: 40px;

        }

    }
`

export const PricesNotes = styled.div`
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 90%;

    h2 {
        width: 100%;
        text-align: center;
        margin-bottom: 15px;
    }
    div {
        background: rgba(227, 227, 227, 0.51);
        border-radius: 10px;
        p {
           
            padding: 10px;
        }
        
    }

`