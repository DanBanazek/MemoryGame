using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Memory.Models;
using Memory.SupportClasses;
using Memory.GameServers;


namespace Memory.Controllers
{
    public class HomeController : Controller
    {
        IGameServer server;
        //Game game;
        public HomeController()
        {
            server = new SimpleGameServer();           
        }
        //
        // GET: /Home/
        public ActionResult Index()
        {
            //ViewBag.Sqaures = 8;
            //game=Games.availableGames[0] as Game;
            return View(server.GetAvailableRooms());
        }

        private List<GamePiece> getPieces()
        {
            List<GamePiece> gps = new List<GamePiece>();
           
            for(int i=0; i<8; i++)
            {
                GamePiece gp = new GamePiece(){id=i, value=i.ToString()};
                gps.Add(gp);
                gps.Add(gp);
            }
            gps.Shuffle();
           
          return gps;
        }

      
        
	}
}