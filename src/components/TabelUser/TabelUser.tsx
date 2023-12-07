"use client";
import { UpdateUserAction } from "@/app/actions";
import { IUser } from "@/utils/interface";
import { Button, Input, Modal, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React, { ChangeEvent, useState } from "react";

const TabelUser: React.FC<{ data: IUser[] }> = ({ data }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [userUpdate, setUserUpdate] = useState<IUser>({});

    const columns: ColumnsType<IUser> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Avatar",
            dataIndex: "avatar",
            key: "avatar",
        },
        {
            title: "Action",
            key: "action",
            render(value, record, index) {
                return (
                    <Button
                        type="primary"
                        key={1}
                        onClick={() => {
                            setIsOpen(true);
                            setUserUpdate(record);
                        }}
                    >
                        Chinh Sua
                    </Button>
                );
            },
        },
    ];

    return (
        <>
            <Modal
                title="Basic Modal"
                open={isOpen}
                onCancel={() => {
                    setIsOpen(false);
                }}
                footer={null}
            >
                <form
                    action={() => {
                        UpdateUserAction(userUpdate);
                        setIsOpen(false);
                    }}
                >
                    <input name="id" defaultValue={userUpdate?.id} hidden />
                    <input
                        name="name"
                        defaultValue={userUpdate?.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setUserUpdate((prev) => ({
                                ...prev,
                                name: e.target.value,
                            }));
                        }}
                    />
                    <input
                        name="avatar"
                        defaultValue={userUpdate?.avatar}
                        onChange={(e) => {
                            setUserUpdate((prev) => ({
                                ...prev,
                                avatar: e.target.value,
                            }));
                        }}
                    />
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </form>
            </Modal>

            <Table dataSource={data} columns={columns} />
        </>
    );
};

export default TabelUser;
