using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading;
using Memory.Models;
using System.Security.Cryptography;

namespace Memory.SupportClasses
{
    public static class MyExtensions
    {
        public static void Shuffle<GamePiece>(this IList<GamePiece> list)
        {
            int n = list.Count;
            while (n > 1)
            {
                n--;
                int k = ThreadSafeRandom.ThisThreadsRandom.Next(n + 1);
                GamePiece value = list[k];
                list[k] = list[n];
                list[n] = value;
            }
        }
    }

    public static class ThreadSafeRandom
    {
        [ThreadStatic]
        private static Random Local;

        public static Random ThisThreadsRandom
        {
            get { return Local ?? (Local = new Random(unchecked(Environment.TickCount * 31 + Thread.CurrentThread.ManagedThreadId))); }
        }
    }
}