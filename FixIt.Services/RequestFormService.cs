using FixIt.Data.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace FixIt.Services
{
    public class RequestFormService : IRequestFormService
    {
        private readonly ApplicationDbContext _db;
        public void AddRequest(RequestForm requestForm)
        {
            throw new NotImplementedException();
        }

        public void DeleteRequest(int requestId)
        {
            throw new NotImplementedException();
        }

        public List<RequestForm> GetAllRequests()
        {
            throw new NotImplementedException();
        }

        public RequestForm GetRequest(int requestId)
        {
            throw new NotImplementedException();
        }
    }
}
