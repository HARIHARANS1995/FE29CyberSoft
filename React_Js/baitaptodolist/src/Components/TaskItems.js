import React, { Component } from 'react'
import THead from './TaskItems/THead'
import Item from './TaskItems/Item'

export default class TaskItems extends Component {
    render() {
        let elmItem = this.props.task.map((item,index)=>{
            return <Item key={index} item={item} index={index}/>
        })
        return (
            <div className="col-md-9 px-0">
                <div className="container-fluid px-0">
                    <div className="row header header--right d-flex align-items-center mx-0">
                        <div className="col-md-6">
                            <div className=" d-flex justify-content-between">
                                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group text-left my-0">
                                <input type="text" className="form-control" placeholder="Tìm kiếm công việc" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3">
                    <table className="table table-hover">
                        {/* THead */}
                        <THead/>
                        <tbody>
                            {elmItem}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
