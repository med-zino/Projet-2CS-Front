import React, { useEffect, useState } from 'react'
import Navbar from '../utilities/Navbar'
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Badge,
} from '@chakra-ui/react'
import '../../styles/search.sass'
import { GiTreehouse } from 'react-icons/gi'
import { AiFillStar } from 'react-icons/ai'
import {
  MdOutlineCabin,
  MdOutlineHouseboat,
  MdPool,
  MdOutlineHouse,
} from 'react-icons/md'
import { GiSpookyHouse } from 'react-icons/gi'
import { BsCheck2Circle, BsHeart, BsHeartFill } from 'react-icons/bs'
import axios from 'axios'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Link } from 'react-router-dom'

function Search() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchField, setSearchField] = useState('')
  const url = 'http://localhost:8001/findAllPosts'

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = () => {
    axios
      .get(url)
      .then((response) => {
        const posts = response.data.result
        setPosts(posts)
        setLoading(false)
        console.log('posts =>' + posts)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const filteredPosts = posts.filter((post) => {
    return (
      post.title.toLowerCase().includes(searchField.toLowerCase()) ||
      post.city.toLowerCase().includes(searchField.toLowerCase())
    )
  })

  const handleChange = (e) => {
    setSearchField(e.target.value)
    console.log(searchField)
  }

  return (
    <>
      <Navbar searchInput={handleChange} />
      <div className='filters'>
        <Tabs variant='soft-rounded' colorScheme='red'>
          <TabList className='tab-list'>
            <Tab>
              {' '}
              <GiTreehouse /> &nbsp; Farms{' '}
            </Tab>
            <Tab>
              {' '}
              <MdOutlineCabin /> &nbsp; Apartement
            </Tab>
            <Tab>
              {' '}
              <MdOutlineHouseboat /> &nbsp;Beach front
            </Tab>
            <Tab>
              {' '}
              <MdPool />
              &nbsp; Amazing pools
            </Tab>
            <Tab>
              {' '}
              <GiSpookyHouse /> &nbsp;Villa
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <div className='posts-grid'>
                {loading
                  ? Array(8)
                      .fill('')
                      .map((_, i) => <SkeltonPostCard key={i} />)
                  : filteredPosts
                      .filter((post) => post.type === 1 && post.verified)
                      .map((post, i) => (
                        <PostCard
                          key={post._id}
                          postId={post._id}
                          imageUrl={
                            post.images[0] ? post.images[0] : post.images
                          }
                          title={post.title}
                          price={post.PricePerNight}
                          baths={post.nbrBathes}
                          beds={post.nbrBeds}
                          rating={post.RatingTotal}
                          verified={post.verified}
                          space={post.space}
                          city={post.city}
                        />
                      ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='posts-grid'>
                {loading
                  ? Array(8)
                      .fill('')
                      .map((_, i) => <SkeltonPostCard key={i} />)
                  : filteredPosts
                      .filter((post) => post.type === 2 && post.verified)
                      .map((post, i) => (
                        <PostCard
                          key={post._id}
                          postId={post._id}
                          imageUrl={post.images[0]}
                          title={post.title}
                          price={post.PricePerNight}
                          baths={post.nbrBathes}
                          beds={post.nbrBeds}
                          rating={post.RatingTotal}
                          verified={post.verified}
                          space={post.space}
                          city={post.city}
                        />
                      ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='posts-grid'>
                {loading
                  ? Array(8)
                      .fill('')
                      .map((_, i) => <SkeltonPostCard key={i} />)
                  : filteredPosts
                      .filter((post) => post.type === 3 && post.verified)
                      .map((post, i) => (
                        <PostCard
                          key={post._id}
                          postId={post._id}
                          imageUrl={post.images[0]}
                          title={post.title}
                          price={post.PricePerNight}
                          baths={post.nbrBathes}
                          beds={post.nbrBeds}
                          rating={post.RatingTotal}
                          verified={post.verified}
                          space={post.space}
                          city={post.city}
                        />
                      ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='posts-grid'>
                {loading
                  ? Array(8)
                      .fill('')
                      .map((_, i) => <SkeltonPostCard key={i} />)
                  : filteredPosts
                      .filter((post) => post.type === 4 && post.verified)
                      .map((post, i) => (
                        <PostCard
                          key={post._id}
                          postId={post._id}
                          imageUrl={post.images[0]}
                          title={post.title}
                          price={post.PricePerNight}
                          baths={post.nbrBathes}
                          beds={post.nbrBeds}
                          rating={post.RatingTotal}
                          verified={post.verified}
                          space={post.space}
                          city={post.city}
                        />
                      ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className='posts-grid'>
                {loading
                  ? Array(8)
                      .fill('')
                      .map((_, i) => <SkeltonPostCard key={i} />)
                  : filteredPosts
                      .filter((post) => post.type === 5 && post.verified)
                      .map((post, i) => (
                        <PostCard
                          key={post._id}
                          postId={post._id}
                          imageUrl={post.images[0]}
                          title={post.title}
                          price={post.PricePerNight}
                          baths={post.nbrBathes}
                          beds={post.nbrBeds}
                          rating={post.RatingTotal}
                          verified={post.verified}
                          space={post.space}
                          city={post.city}
                        />
                      ))}
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </>
  )
}

export default Search

export const PostCard = ({
  postId,
  imageUrl,
  title,
  beds,
  baths,
  rating,
  reviewCount,
  price,
  verified,
  space,
  city,
}) => {
  const property = {
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center',
    formattedPrice: '1.900',
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Link to={`/details?id=${postId}`}>
      <Box
        height={'400px'}
        maxW='sm'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
      >
        <Box height={'250px'} overflow='hidden' className='image-box'>
          <img src={imageUrl} alt={property.imageAlt} />
          {/* <div className="heart">
          <BsHeartFill className="heart-outline" />
        </div> */}
          <div className='heart'>
            <BsHeart className='heart-outline' />
          </div>
        </Box>
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              mr='2'
            >
              {beds} beds &bull; {baths} baths &bull; {space} m°2
            </Box>
            {verified ? (
              <Badge
                display='flex'
                alignItems='center'
                borderRadius='full'
                px='2'
                colorScheme='teal'
              >
                Verified &nbsp; <BsCheck2Circle />
              </Badge>
            ) : (
              ''
            )}
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {title} - {city}
          </Box>

          <Box>
            $ {price}
            <Box as='span' color='gray.600' fontSize='sm'>
              / night
            </Box>
          </Box>

          <Box display='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <AiFillStar key={i} fill={i < rating ? 'gold' : 'grey'} />
              ))}
            {/* {rating} */}
            {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box> */}
          </Box>
        </Box>
      </Box>
    </Link>
  )
}

const SkeltonPostCard = () => {
  return (
    <Box
      height={'400px'}
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Skeleton height={250} />
      <Box p='6'>
        <Box alignItems='baseline'>
          <Skeleton height={50} />
        </Box>

        <Box mt='1'>
          <Skeleton height={20} />
        </Box>

        <Box>
          <Skeleton height={20} />
        </Box>

        <Box display='flex' mt='2' alignItems='center'>
          <Skeleton height={20} />
        </Box>
      </Box>
    </Box>
  )
}
