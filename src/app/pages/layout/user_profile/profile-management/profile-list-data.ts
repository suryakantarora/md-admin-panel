
export interface Role{
    menuId: string;
    parentId: string;
    name: string;
    description: string;
    selected: boolean;
    children: Role[];
  }


export class MenuData {


    static initRoles(): Role[] {
        const roles: Role[] = new Array<Role>();
        const a: Role = {
            //    parent
            menuId: "1",
            parentId: "0",
            name: "Configuration",
            description: "configuration details",
            selected: false,
            children: [
                {
                    //   children
                    menuId: "11",
                    parentId: "1",
                    name: "Fee management",
                    description: "fee management details",
                    selected: false,
                    children: [
                        {
                            menuId: "111",
                            parentId: "11",
                            name: "add fee",
                            description: "add fee details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "112",
                            parentId: "11",
                            name: "view fee",
                            description: "view fee details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "113",
                            parentId: "11",
                            name: "edit fee",
                            description: "edit fee details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "114",
                            parentId: "11",
                            name: "delete fee",
                            description: "delete fee details",
                            selected: false,
                            children: []
                        },

                    ]
                },
                {
                    menuId: "13",
                    parentId: "0",
                    name: "Limit management",
                    description: "limit management details",
                    selected: false,
                    children: [
                        {
                            menuId: "131",
                            parentId: "0",
                            name: "add limit",
                            description: "add limit details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "132",
                            parentId: "0",
                            name: "View Limit",
                            description: "view limit details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "133",
                            parentId: "0",
                            name: "edit limit",
                            description: "edit limit details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "134",
                            parentId: "0",
                            name: "delete limit",
                            description: "delete limit details",
                            selected: false,
                            children: []
                        }
                    ]
                },
                {
                    menuId: "14",
                    parentId: "0",
                    name: "News Update",
                    description: "News Update details",
                    selected: false,
                    children: [
                        {
                            menuId: "141",
                            parentId: "0",
                            name: "Add News",
                            description: "Add News details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "142",
                            parentId: "0",
                            name: "Edit News",
                            description: "Edit News details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "View News",
                            description: "View News details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Delete News",
                            description: "Delete News details",
                            selected: false,
                            children: []
                        }
                    ]
                },
                {
                    menuId: "",
                    parentId: "0",
                    name: "Branch",
                    description: "Branch details",
                    selected: false,
                    children: [
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Add Branch",
                            description: "Add Branch details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "View Branch",
                            description: "View Branch details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Edit Branch",
                            description: "Edit Branch details",
                            selected: false,
                            children: []
                        }
                    ]
                },
                {
                    menuId: "",
                    parentId: "0",
                    name: "Currency Rate",
                    description: "Currency Rate details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "",
                    parentId: "0",
                    name: "KYC Details",
                    description: "View KYC details",
                    selected: false,
                    children: [
                        {
                            menuId: "",
                            parentId: "0",
                            name: "View KYC",
                            description: "View KYC details",
                            selected: false,
                            children: []
                        }
                    ]
                },
                // {
                //     menuId: "",
                //     parentId: "0",
                //     name: "Exchange Rate",
                //     description: "Exchange Rate details",
                //     selected: false,
                //     children: []
                // },
                {
                    menuId: "",
                    parentId: "0",
                    name: "Promotions",
                    description: "Promotions details",
                    selected: false,
                    children: [
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Add Promotions",
                            description: "Add Promotions details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Edit Promotions",
                            description: "View Promotions details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "View Promotions",
                            description: "View Promotions details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Delete Promotions",
                            description: "Delete Promotions details",
                            selected: false,
                            children: []
                        }
                    ]
                },
                // {
                //     menuId: "",
                //     parentId: "0",
                //     name: "Update Demo URL",
                //     description: "Update Demo URL details",
                //     selected: false,
                //     children: [
                //         {
                //             menuId: "",
                //             parentId: "0",
                //             name: "Add Demo URL",
                //             description: "Add Demo URL details",
                //             selected: false,
                //             children: []
                //         },
                //         {
                //             menuId: "",
                //             parentId: "0",
                //             name: "View Demo",
                //             description: "View Demo details",
                //             selected: false,
                //             children: []
                //         },
                //         {
                //             menuId: "",
                //             parentId: "0",
                //             name: "Edit Demo",
                //             description: "Edit Demo details",
                //             selected: false,
                //             children: []
                //         }
                //     ]
                // },
                {
                    menuId: "",
                    parentId: "0",
                    name: "Update Bank List",
                    description: "Update Bank List details",
                    selected: false,
                    children: [
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Add Bank List",
                            description: "Add Bank List details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "Edit Bank List",
                            description: "Edit Bank List Details",
                            selected: false,
                            children: []
                        },
                        {
                            menuId: "",
                            parentId: "0",
                            name: "View Bank List",
                            description: "View Bank List",
                            selected: false,
                            children: []
                        }
                    ]
                },
                // {
                //     menuId: "",
                //     parentId: "0",
                //     name: "Interest Rate",
                //     description: "Interest Rate details",
                //     selected: false,
                //     children: [
                //         {
                //             menuId: "",
                //             parentId: "0",
                //             name: "Add Interest",
                //             description: "Add Interest details",
                //             selected: false,
                //             children: []
                //         },
                //         {
                //             menuId: "",
                //             parentId: "0",
                //             name: "View Interest",
                //             description: "View Interest details",
                //             selected: false,
                //             children: []
                //         },
                //         {
                //             menuId: "",
                //             parentId: "0",
                //             name: "Edit Interest",
                //             description: "Edit Interest details",
                //             selected: false,
                //             children: []
                //         }
                //     ]
                // }
            ]
        }
        roles.push(a);


        const b: Role = {
            menuId: "2",
            parentId: "2",
            name: "Wallet",
            description: "Wallet details",
            selected: false,
            children: [
                {
                    menuId: "21",
                    parentId: "2",
                    name: "Wallet TopUp",
                    description: "Wallet TopUp details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "22",
                    parentId: "2",
                    name: "Wallet",
                    description: "Wallet Withdrawal Details",
                    selected: false,
                    children: []
                }
            ]
        }
        roles.push(b);


        const c: Role = {
            menuId: "3",
            parentId: "3",
            name: "Merchant Management",
            description: "Merchant Management details",
            selected: false,
            children: [
                {
                    menuId: "31",
                    parentId: "3",
                    name: "Merchant Management",
                    description: "Merchant Management details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "32",
                    parentId: "3",
                    name: "QR Registration",
                    description: "QR registration Details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "33",
                    parentId: "3",
                    name: "MCC Registration",
                    description: "MCC registration Details",
                    selected: false,
                    children: []
                },
                {
                        menuId: "34",
                        parentId: "3",
                        name: "QR Registration",
                        description: "QR registration Details",
                        selected: false,
                        children: []
                }
            ]
        }
        roles.push(c);


        const d: Role = {
            menuId: "4",
            parentId: "4",
            name: "Customer Support",
            description: "Customer Support details",
            selected: false,
            children: [
                {
                    menuId: "41",
                    parentId: "4",
                    name: "View Mobile User ",
                    description: "View Mobile User details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "42",
                    parentId: "4",
                    name: "View Transaction",
                    description: "View Transaction Details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "43",
                    parentId: "4",
                    name: "Update Security Option",
                    description: "Update Security Option",
                    selected: false,
                    children: []
                },
                {
                    menuId: "44",
                    parentId: "4",
                    name: "Block User",
                    description: "Block User Details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "45",
                    parentId: "4",
                    name: "UnBlock User",
                    description: "UnBlock User Details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "46",
                    parentId: "4",
                    name: "Card Update",
                    description: "Card Update Details",
                    selected: false,
                    children: []
                }
            ]
        }
        roles.push(d);

        const e: Role = {
            menuId: "5",
            parentId: "5",
            name: "Monitoring",
            description: "Monitoring details",
            selected: false,
            children: [
                {
                    menuId: "51",
                    parentId: "5",
                    name: "Transaction Monitoring",
                    description: "Transaction Monitoring ",
                    selected: false,
                    children: []
                },
            ]
        }
        roles.push(e);

        const f: Role = {
            menuId: "6",
            parentId: "6",
            name: "App Management",
            description: "App Management ",
            selected: false,
            children: [
                {
                    menuId: "61",
                    parentId: "6",
                    name: "App Update",
                    description: "App Update details",
                    selected: false,
                    children: []
                },
            ]
        }
        roles.push(f)

        const g: Role = {
            menuId: "7",
            parentId: "7",
            name: "Reports",
            description: "Reports details",
            selected: false,
            children: [
                {
                    menuId: "71",
                    parentId: "7",
                    name: "Transactions Report",
                    description: "Transaction Report ",
                    selected: false,
                    children: []
                },
                {
                    menuId: "72",
                    parentId: "7",
                    name: "BCEL Transaction",
                    description: "BCEL Transaction details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "73",
                    parentId: "7",
                    name: "EDL Report",
                    description: "EDL Report details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "74",
                    parentId: "7",
                    name: "Daily Txn Report",
                    description: "Daily Txn Report",
                    selected: false,
                    children: []
                },
                {
                    menuId: "75",
                    parentId: "7",
                    name: "Master Balance Report",
                    description: "Master Balance Report",
                    selected: false,
                    children: []
                },
                {
                    menuId: "76",
                    parentId: "7",
                    name: "Audit Report",
                    description: "Audit Report details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "77",
                    parentId: "7",
                    name: "User Report",
                    description: "User Report details",
                    selected: false,
                    children: []
                },
            ]
        }
        roles.push(g);

        const h: Role = {
            menuId: "8",
            parentId: "8",
            name: "User&Profile",
            description: "User&Profile Details",
            selected: false,
            children: [
                {
                    menuId: "81",
                    parentId: "8",
                    name: "Profile",
                    description: "Profile details",
                    selected: false,
                    children: []
                },
                {
                    menuId: "82",
                    parentId: "8",
                    name: "User",
                    description: "User details",
                    selected: false,
                    children: []
                }
            ]
        }
        roles.push(h)

        return roles;
    }
}
