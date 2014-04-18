using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Memory.Models
{
    public class GamePiece
    {
        public int id { get; set; }
        public string value { get; set; }
        public string altValue { get; set; }
        public bool isImageFile { get; set; }
        public string dataID { get; set; }
    }
}