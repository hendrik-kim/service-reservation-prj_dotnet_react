using FixIt.Data.Models;
using System.Collections.Generic;


namespace FixIt.Services
{
    public interface IRequestFormService
    {
        public List<RequestForm> GetAllForms();
        public RequestForm GetFormById(int requestId);
        public void AddRequest(RequestForm requestForm);
        public void DeactivateRequest(RequestForm requestForm);
    }
}