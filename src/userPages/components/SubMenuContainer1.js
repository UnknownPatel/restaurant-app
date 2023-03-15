import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from "react";

function SubMenuContainer1() {
  return (
    <div className="subMenuContianer">
      <h3>Menu Category</h3>
      <div className="viewAll">
        <p>View All</p>
        <i>
          <ChevronRightIcon />
        </i>
      </div>
    </div>
  );
}

export default SubMenuContainer1;