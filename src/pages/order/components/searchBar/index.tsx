export const SearchBar = (props: any) => {
  return (
    <>
      <div className='search-bar'>
        <input type='text' placeholder='Search' />
      </div>
      <style jsx>{`
        .search-bar {
          height: 40px;
          display: flex;
          width: 100%;
          max-width: 230px;
          padding-left: 16px;
          border-radius: 8px;
          margin: 0px 10px;
        }
        .search-bar input {
          width: 100%;
          height: 100%;
          border: none;
          background-color: #f8f8f8;
          border-radius: 4px;
          font-family: 'Poppins';
          font-size: 15px;
          font-weight: 500;
          padding: 0 20px 0 40px;
          box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
          background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
          background-size: 14px;
          background-repeat: no-repeat;
          background-position: 16px 48%;
          color: var(--theme-color);
        }
        .search-bar input::placeholder {
          font-family: 'Poppins';
          color: #000;
          font-size: 15px;
          font-weight: 500;
        }
        .search-bar input:focus {
          outline: none;
        }
      `}</style>
    </>
  );
};
