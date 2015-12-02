using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AppMon;

namespace AppMon.Controllers
{
    public class ResponseTimesController : ApiController
    {
        private appmonEntities db = new appmonEntities();

        // GET: api/ResponseTimes
        public IQueryable<ResponseTime> GetResponseTimes()
        {
            return db.ResponseTimes;
        }

        // GET: api/ResponseTimes/5
        [ResponseType(typeof(ResponseTime))]
        public IHttpActionResult GetResponseTime(string id)
        {
            ResponseTime responseTime = db.ResponseTimes.Find(id);
            if (responseTime == null)
            {
                return NotFound();
            }

            return Ok(responseTime);
        }

        // PUT: api/ResponseTimes/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutResponseTime(string id, ResponseTime responseTime)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != responseTime.site)
            {
                return BadRequest();
            }

            db.Entry(responseTime).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ResponseTimeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ResponseTimes
        [ResponseType(typeof(ResponseTime))]
        public IHttpActionResult PostResponseTime(ResponseTime responseTime)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ResponseTimes.Add(responseTime);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ResponseTimeExists(responseTime.site))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = responseTime.site }, responseTime);
        }

        // DELETE: api/ResponseTimes/5
        [ResponseType(typeof(ResponseTime))]
        public IHttpActionResult DeleteResponseTime(string id)
        {
            ResponseTime responseTime = db.ResponseTimes.Find(id);
            if (responseTime == null)
            {
                return NotFound();
            }

            db.ResponseTimes.Remove(responseTime);
            db.SaveChanges();

            return Ok(responseTime);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ResponseTimeExists(string id)
        {
            return db.ResponseTimes.Count(e => e.site == id) > 0;
        }
    }
}