using FixIt.Data;
using FixIt.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FixIt.Services
{
    public class RequestFormService : IRequestFormService
    {
        private readonly ApplicationDbContext _db;

        public RequestFormService(ApplicationDbContext db)
        {
            _db = db;
        }

        public void AddRequest(RequestForm requestForm)
        {
            _db.RequestForms.Add(requestForm);
            _db.SaveChanges();
        }

        public void DeactivateRequest(RequestForm requestForm)
        {
            // it my changed 'deactivated' not delete
            var formToDeactivate = _db.RequestForms.Find(requestForm.Id);
            if (formToDeactivate != null)
            {
                _db.Update(formToDeactivate);
                _db.SaveChanges();
            }
        }

        public List<RequestForm> GetAllForms()
        {
            return _db.RequestForms.ToList();
        }

        public RequestForm GetFormById(int formId)
        {
            return _db.RequestForms.Find(formId);
        }
    }
}
