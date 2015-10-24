describe("the game", function(){
  beforeEach(function(){
    player.x = 0;
    player.y = 0;
  });

  describe("moveRight", function(){
    it("should add 1 to player.x", function(){
      moveRight();
      expect(player.x).toEqual(1);
    });
  });

  describe("moveLeft", function(){
    it("should subtract 1 from player.x", function(){
      moveLeft();
      expect(player.x).toEqual(-1);
    });
  });

  describe("moveDown", function(){
    it("should subtract 1 from player.y", function(){
      moveDown();
      expect(player.y).toEqual(1);
    });
  });

  describe("moveUp", function(){
    it("should subtract 1 from player.y", function(){
      moveUp();
      expect(player.y).toEqual(-1);
    });
  });

  describe("player won", function(){
    it("should check if the player has won", function(){
      renderWin();
      spyOn(window, "renderWin");
      player.x = 10;
      player.y = 0;
      window.checkWin();


      expect(window.renderWin).toHaveBeenCalled();
      expect(window.renderWin).toHaveBeenCalled();
      expect(window.renderWin.calls.count().toBeGreaterThan(0))
    });
  });
});
