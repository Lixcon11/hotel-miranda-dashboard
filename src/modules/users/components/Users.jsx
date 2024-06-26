import { Columns } from "./Columns";
import { fetchUsers } from "../features/userSlice";
import { deleteUser } from "../features/userSlice";
import { TablePage } from "../../../components/TablePage";
import { filterList } from "../../../functions/filterList";

const Users = () => {

    const pageData = {
        title: "Users",
        columns: Columns,
        dataParams: {slice:"users", sortDeafult: "", filterDefault: undefined, searchFilter: "name"},
        filterList: filterList.user,
        toFetch: fetchUsers,
        toDelete: deleteUser
    }

    return (
        <>
            <TablePage pageData={pageData} />
        </>
    )
}

export {Users}