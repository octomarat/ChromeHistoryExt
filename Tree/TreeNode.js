function TreeNode (rawNode_, parent_) {

    this.childrenArray = [];
    this.parent = parent_;
    this.rawNode = rawNode_;

    this.title = rawNode_.HistoryItem.title;
    this.url = rawNode_.HistoryItem.url;
    this.id = rawNode_.VisitItem.visitId;
    
    if( this.title == "") {
      this.title = this.url;
    }
    
    
    this.equals = function (treeNode) {
        return this.id === treeNode.id;
    };
   
    this.getName = function() {
      if( this.title == "") {
         return this.url;
      } 
      return this.title;
    };
    
    this.getDate = function() {
      
      floorTime = Math.floor( this.rawNode.VisitItem.visitTime );
      sec = (floorTime - floorTime % 1000) / 1000;
      var date = new Date(0); 
      date.setUTCSeconds(sec);
      
      year = date.getFullYear().toString();
      month = (date.getMonth()+1).toString();
      day = date.getDate().toString();
      
      if(month.length == 1) {
        month = "0" + month;
      }
      
      if(day.length == 1) {
        day = "0" + day;
      }
      
      return day + "." + month + "." + year;
    };
    
    
    
    this.getTime = function() {

      floorTime = Math.floor( this.rawNode.VisitItem.visitTime );
      sec = (floorTime - floorTime % 1000) / 1000;
      var date = new Date(0);
      date.setUTCSeconds(sec);

      hours = date.getHours().toString();
      minutes = date.getMinutes().toString();
      seconds = date.getSeconds().toString();

      if(minutes.length == 1) {
        minutes = "0" + minutes;
      }

      if(seconds.length == 1) {
        seconds = "0" + seconds;
      }

      return hours + ":" + minutes + ":" + seconds;
    };
}

//function TreeNode (parent, title, url, id) {
//    this.childrenArray = [];
//    this.parent = parent;
//    this.title = title;
//    this.url = url;
//    this.id = id;
//
//    this.equals = function (treeNode) {
//        return this.id === treeNode.id;
//    }
//}
