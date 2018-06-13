import React, { Component } from 'react';
import { CardFooter, Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class OrderPagination extends Component {

  constructor(props) {
    super(props)
    this.state = { };
    this.getPageItems = this.getPageItems.bind(this);
  };

  setPage(page) {
    this.props.setPage(page);
  }
  getPageItems() {
    var first = Math.floor((this.props.page-1)/this.props.totalPages)*this.props.totalPages+1;
    var lastPage = Math.floor((this.props.totalOrders-1)/this.props.pageSize) + 1;
    var last = first+this.props.totalPages-1;
    last = (last >= lastPage) ? lastPage : last;
    var backDisabled = (this.props.page === 1) ? true : false;
    var nextDisabled = ((this.props.page*this.props.pageSize)+1 > this.props.totalOrders) ? true : false;
    console.log(this.props.totalOrders);

    var pageItems = [];
    if (this.props.page > this.props.totalPages) {
      pageItems.push(
        <PaginationItem onClick={this.setPage.bind(this, 1)}>
          <PaginationLink>First</PaginationLink>
        </PaginationItem>        
      )
    }
    pageItems.push(
      <PaginationItem disabled={backDisabled}
                      onClick={backDisabled ? () => {} : this.setPage.bind(this, this.props.page-1)}>
        <PaginationLink previous>Back</PaginationLink>
      </PaginationItem>
    );
    for (var i = first; i < last+1; i++) {
      pageItems.push(
        <PaginationItem active={(this.props.page === i) ? true : false}>
          <PaginationLink onClick={this.setPage.bind(this, i)}>{i}</PaginationLink>
        </PaginationItem>
      );
    }
    pageItems.push(
      <PaginationItem disabled={nextDisabled}
                      onClick={nextDisabled ? () => {} : this.setPage.bind(this, this.props.page+1)}>
        <PaginationLink next>Next</PaginationLink>
      </PaginationItem>
    );
    if (lastPage > last) {
      pageItems.push(
        <PaginationItem>
          <PaginationLink onClick={this.setPage.bind(this, lastPage)}>Last</PaginationLink>
        </PaginationItem>
      );
    }
    return <Pagination>{pageItems}</Pagination>
  }

  render() {
    return (
      <CardFooter style={{fontSize: "20px"}}>
        {this.getPageItems()}
          {/*<PaginationItem active>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next>Next</PaginationLink>
          </PaginationItem>*/}
      </CardFooter>
    )
  }
};

export default OrderPagination;