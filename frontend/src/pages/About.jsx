import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>

      <p className="text-lg mb-4">
        Welcome to <span className="font-semibold text-blue-600">Auction Plateform</span> – your ultimate destination for secure and exciting online auctions.
      </p>

      <p className="mb-4">
        At BidSphere, we empower individuals and businesses to buy and sell a wide range of items through real-time bidding. Whether you're looking to win collectibles, electronics, fashion items, or rare antiques, our platform ensures a fair and transparent auction process.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to simplify the auction experience while providing a safe, user-friendly, and innovative platform for everyone. We strive to connect buyers and sellers globally and foster a community built on trust and opportunity.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Key Features</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>Live, real-time bidding with instant updates</li>
        <li>Secure user authentication and payment gateways</li>
        <li>Seller dashboards for listing and tracking products</li>
        <li>Transparent bidding history for all auctions</li>
        <li>Mobile-friendly interface for on-the-go bidding</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Join Us</h2>
      <p className="mb-4">
        Whether you're here to find hidden gems or turn your products into profits, BidSphere is the place for you. Sign up today and start your auction journey with confidence.
      </p>

      <p className="mt-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} BidSphere. All rights reserved.
      </p>
    </div>
  );
};

export default About;
