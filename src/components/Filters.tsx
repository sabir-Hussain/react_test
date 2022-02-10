import { Form, Input, Button, Select, Row, Col, DatePicker } from 'antd';
import { ACTION_TYPES, APPLICATION_TYPES } from '../constants/filters';
const { Option } = Select;

const Filters = ({ onFilter }: any) => {
    return (
        <Form
            name="basic"
            onFinish={onFilter}
            layout={'vertical'}
        >
            <Row align="bottom" gutter={6}>
                <Col span={4}>
                    {/* Improvement -  For now we are adding some static vlaues but these values should extract from data */}
                    <Form.Item name="actionType" label="Action Type">
                        <Select
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            {ACTION_TYPES.map((actionType: any) => <Option key={actionType} value={actionType}>{actionType}</Option>)}
                        </Select>
                    </Form.Item>
                </Col>
                {/* Improvement -  For now we are adding some static vlaues but these values should extract from data */}
                <Col span={4}>
                    <Form.Item name="applicationType" label="Application Type">
                        <Select
                            
                            placeholder="Select a option and change input text above"
                            allowClear
                        >
                            {APPLICATION_TYPES.map((applicationType: any) => <Option key={applicationType} value={applicationType}>{applicationType}</Option>)}
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item name="fromDate" label="From Date">
                        <DatePicker style={{width: '100%'}} format="YYYY-MM-DD" />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item name="toDate" label="To Date">
                        <DatePicker style={{width: '100%'}} format="YYYY-MM-DD"  />
                    </Form.Item>

                </Col>
                <Col span={4}>
                    <Form.Item
                        label="Application ID"
                        name="applicationId"
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col span={4}>
                    <Form.Item>
                        <Button style={{width: '100%'}} type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Form.Item>
                </Col>

            </Row>

        </Form>
    );
};

export default Filters;

