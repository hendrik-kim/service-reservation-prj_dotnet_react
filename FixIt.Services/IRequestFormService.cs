using FixIt.Data.Models;
using System.Collections.Generic;


namespace FixIt.Services
{
    public interface IRequestFormService
    {
        public List<RequestForm> GetAllRequests();
        public RequestForm GetRequest(int requestId);
        public void AddRequest(RequestForm requestForm);
        public void DeleteRequest(int requestId);
    }
}