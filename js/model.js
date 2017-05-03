  /**
   * App models
   */

  'use strict';

  function Message() {
      this.body = null;
      this.author = null;
      this.createdAt = new Date();
  }

  function Session() {
      this.userName = null;
  }