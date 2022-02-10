import { Layout, Table } from 'antd';

import { useEffect, useState } from 'react';
import Filters from './Filters';
import NotAvailble from './NotAvailble';
import checkDates from '../utils/filterByDates';
import APIS from '../constants/apis';

const { Content } = Layout;

function DataTable() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);

    const onFilter = (values: any) => {
        let { actionType, applicationType, fromDate, toDate, applicationId } = values;

        if (actionType || applicationType || fromDate || toDate || applicationId) {
            fromDate = fromDate && fromDate.format('YYYY-MM-DD');
            toDate = toDate && toDate.format('YYYY-MM-DD');

            setFilteredData(data.filter((item: any) => {
                let dateOnly = item?.creationTimestamp?.split(" ")[0]

                return (
                    (applicationId && item.applicationId && item.applicationId.toString().includes(applicationId)) ||
                    (actionType && item.actionType && item.actionType.toLowerCase() === actionType.toLowerCase()) ||
                    (applicationType && item.applicationType && item.applicationType.toLowerCase().includes(applicationType.toLowerCase())) ||
                    (checkDates(fromDate, toDate, dateOnly))
                );

            }));
        } else {
            setFilteredData(data)
        }
    };

    useEffect(() => {
        fetch(APIS.MOCK)
            .then(res => res.json())
            .then(data => {
                setData(data?.result?.auditLog);
                setFilteredData(data?.result?.auditLog)
            })
            .catch(err => console.log(err))
            .finally(() => { setLoading(false) });

        return () => {
            setData([])
        };
    }, []);



    const columns = [
        {
            title: 'Log ID',
            dataIndex: 'logId',
            key: 'logId',
            sorter: (a: any, b: any) => a.logId - b.logId,
            render: (logId: any) => logId === null || logId === undefined ? <NotAvailble /> : logId
        },
        {
            title: 'Application Type',
            dataIndex: 'applicationType',
            key: 'applicationType',
            sorter: (a: any, b: any) => { if (a.applicationType) return a.applicationType.localeCompare(b.applicationType); return 0 },
            render: (applicationType: any) => applicationType === null || applicationType === undefined ? <NotAvailble /> : applicationType
        },
        {
            title: 'Application ID',
            dataIndex: 'applicationId',
            key: 'applicationId',
            sorter: (a: any, b: any) => a.applicationId - b.applicationId,
            render: (applicationId: any) => applicationId === null || applicationId === undefined ? <NotAvailble /> : applicationId
        },
        {
            title: 'Action',
            dataIndex: 'actionType',
            key: 'actionType',
            sorter: (a: any, b: any) => { if (a.actionType) return a.actionType.localeCompare(b.actionType); return 0 },
            render: (actionType: any) => actionType === null || actionType === undefined ? <NotAvailble /> : actionType
        },
        {
            title: 'Action Details',
            dataIndex: 'actionDetails',
            key: 'actionDetails',
            sorter: (a: any, b: any) => { if (a.actionDetails) return a.actionDetails.localeCompare(b.actionDetails); return 0 },
            render: (actionDetails: any) => actionDetails === null || actionDetails === undefined ? <NotAvailble /> : actionDetails
        },
        {
            title: 'Date : Time',
            dataIndex: 'creationTimestamp',
            key: 'creationTimestamp',
            sorter: (a: any, b: any) => { if (a.creationTimestamp) return a.creationTimestamp.localeCompare(b.creationTimestamp); return 0 },
            render: (creationTimestamp: any) => creationTimestamp === null || creationTimestamp === undefined ? <NotAvailble /> : creationTimestamp.split(" ").join(" / ")

        },
    ];

    return (
        <div>
            <Filters onFilter={onFilter} />
            <Content>
                <Table columns={columns} dataSource={filteredData} loading={loading} />
            </Content>
        </div>
    );
}

export default DataTable;
