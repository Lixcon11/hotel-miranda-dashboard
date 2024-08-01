import { Page } from "../../../components/Page"

const Dashboard = ({children}) => {
    return (
        <>
            <Page title="Dashboard" textHandler={null}>{children}</Page>
        </>
    )
}

export {Dashboard}