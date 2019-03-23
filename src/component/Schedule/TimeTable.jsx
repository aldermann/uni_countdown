import React from "react";
import { Table } from "antd";
import style from "./schedule.module.css";
function merge_row(span_row = "11111111111", span_col = "11111111111") {
    return (value, row, index) => {
        const obj = {
            children: value,
            props: {}
        };
        const rowSpan = Number(span_row[index]),
            colSpan = Number(span_col[index]);
        obj.props = { rowSpan, colSpan };
        return obj;
    };
}
const columns = [
    {
        title: "Ngày",
        dataIndex: "date",
        className: style.column,
        render: merge_row("20204000300")
    },
    {
        title: "Buổi",
        dataIndex: "period",
        className: style.column,
        render: merge_row("11113001300")
    },
    {
        title: "Bài thi/Môn thi",
        dataIndex: "test",
        colSpan: 2,
        className: style.column,
        render: merge_row("11113001300", "33221112111")
    },
    {
        title: "Môn thi",
        colSpan: 0,
        dataIndex: "subject",
        className: style.column,
        render: merge_row("11111111111", "00001110111")
    },
    {
        title: "Thời gian làm bài",
        dataIndex: "duration",
        className: style.column,
        render: merge_row("11111111111", "00111111111")
    },
    {
        title: "Giờ bắt đầu làm bài",
        dataIndex: "start_time",
        className: style.column
    }
];
const data = [
    {
        date: "24/6/2019",
        period: "Sáng",
        test: "Họp cán bộ coi thi",
        start_time: "08:00"
    },
    {
        date: "24/6/2019",
        period: "Chiều",
        test: "Làm thủ tục dự thi",
        start_time: "14:00"
    },
    {
        date: "25/6/2019",
        period: "Sáng",
        test: "Ngữ Văn",
        start_time: "07:30",
        duration: "120 phút"
    },
    {
        date: "25/6/2019",
        period: "Chiều",
        test: "Toán",
        start_time: "14:00",
        duration: "90 phút"
    },
    {
        date: "26/6/2019",
        period: "Sáng",
        test: "Bài thi KHTN",
        subject: "Vật lý",
        start_time: "07:30",
        duration: "50 phút"
    },
    {
        date: "26/6/2019",
        period: "Sáng",
        test: "Bài thi KHTN",
        subject: "Hóa học",
        start_time: "08:30",
        duration: "50 phút"
    },
    {
        date: "26/6/2019",
        period: "Sáng",
        test: "Bài thi KHTN",
        subject: "Sinh học",
        start_time: "09:30",
        duration: "50 phút"
    },
    {
        date: "26/6/2019",
        period: "Chiều",
        test: "Ngoại ngữ",
        start_time: "14:20",
        duration: "60 phút"
    },
    {
        date: "27/6/2019",
        period: "Sáng",
        test: "Bài thi KHXH",
        subject: "Lịch sử",
        start_time: "07:30",
        duration: "50 phút"
    },
    {
        date: "27/6/2019",
        period: "Sáng",
        test: "Bài thi KHXH",
        subject: "Địa lý",
        start_time: "08:30",
        duration: "50 phút"
    },
    {
        date: "27/6/2019",
        period: "Sáng",
        test: "Bài thi KHXH",
        subject: "GDCD",
        start_time: "08:30",
        duration: "50 phút"
    }
];

export default class TimeTable extends React.Component {
    render() {
        return (
            <Table
                columns={columns}
                dataSource={data}
                bordered
                pagination={false}
                rowClassName={style.column}
            />
        );
    }
}
