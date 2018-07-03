export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'fa fa-tachometer'
    },
    {
      name: 'Customers',
      url: '/',
      icon: 'fa fa-user',
      children: [
        {
          name: 'Lenders',
          url: '/customers/lenders'
        },
        {
          name: 'Borrowers',
          url: '/customers/borrowers'
        }
      ]
    },
    {
      name: 'Need Verification',
      url: '/verifications/need-verification',
      icon: 'fa fa-check-circle'
    },
    {
      name: 'Loans',
      url: '/',
      icon: 'fa fa-money',
      children: [
        {
          name: 'Crowdfundings',
          url: '/loans/crowdfundings'
        },
        {
          name: 'Installments',
          url: '/loans/installments'
        },
        {
          name: 'Rejected Loans',
          url: '/loans/rejectedloans'
        }
      ]
    },
    {
      name: 'Data Entities',
      url: '/',
      icon: 'fa fa-database',
      children: [
        {
          name: 'Banks',
          url: '/data-entities/banks'
        }
      ]
    },
    {
      name: 'Finance',
      url: '/',
      icon: 'fa fa-credit-card-alt',
      children: [
        {
          name: 'Withdraws',
          url: '/finance/withdraws'
        }
      ]
    },
    {
      name: 'Blogs',
      url: '/',
      icon: 'fa fa-rss',
      children: [
        {
          name: 'Categories',
          url: '/blogs/categories'
        },
        {
          name: 'Articles',
          url: '/blogs/articles'
        }
      ]
    }
  ]
};
