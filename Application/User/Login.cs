using MediatR;

namespace Application.User
{
    public class Login
    {
        public class Query : IRequest<User>

        {

            public string username { get; set; }

            public string password { get; set; }


        }

        public class QueryValidation : AbstractValidator<Query>
        {

        }
    }
}