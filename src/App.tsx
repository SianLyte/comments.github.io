import { toast } from "react-toastify";
import "./App.css";
import getAuthorsRequest from "./api/authors/getAuthorsRequest";
import Chat from "./components/chat/Chat";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    margin-top: 52px;
    @media (max-width: 768px) {
        padding: 0 30px;
    }
    @media (min-width: 600px) {
        width: 600px;
    }
`


function App() {

    useQuery({
        queryKey: ["getAuthors"],
        queryFn: getAuthorsRequest,
        retry(failureCount, error) {
            if (failureCount == 5) {
                toast("Something went wrong. Please reload the site.", { type: "error" });
                return false;
            }
            return true;
        },
    })

    return (
        <Container>
            <Chat />
        </Container>

    );
}

export default App;
