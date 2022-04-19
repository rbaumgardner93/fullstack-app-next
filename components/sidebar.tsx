import NextImage from "next/image";
import NextLink from "next/link";
import {
	Box,
	List,
	ListItem,
	ListIcon,
	Divider,
	Center,
	LinkBox,
	LinkOverlay
} from "@chakra-ui/layout";
import {
	MdHome,
	MdSearch,
	MdLibraryMusic,
	MdPlaylistAdd,
	MdFavorite
} from "react-icons/md";

const navMenuItems = [
	{ name: "Home", icon: MdHome, route: "/" },
	{ name: "Search", icon: MdSearch, route: "/search" },
	{ name: "Your Library", icon: MdLibraryMusic, route: "/library" }
];

const musicMenuItems = [
	{ name: "Create Playlist", icon: MdPlaylistAdd, route: "/" },
	{ name: "Favorites", icon: MdFavorite, route: "/favorites" }
]

const playlist = new Array(30).fill(1).map((_, i) => `Playlist ${i + 1}`);

const Sidebar = () => {
	return (
		<Box
			width="100%"
			height="calc(100vh - 100px)"
			bg="black"
			paddingX="5px"
			color="gray">
			<Box paddingY="20px" height="100%">
				<Box width="120px" marginBottom="20px" paddingX="20px">
					<NextImage src="/trax-logo.svg" height={ 60 } width={ 120 } />
				</Box>
				<Box marginBottom="20px">
					<List spacing={2}>
						{ navMenuItems.map( item => (
							<ListItem paddingX="20px" fontSize="16px" key={ item.name }>
								<LinkBox>
									<NextLink href={ item.route } passHref>
										<LinkOverlay>
											<ListIcon
												as={ item.icon }
												color="white"
												marginRight="20px" />
											{ item.name }
										</LinkOverlay>
									</NextLink>
								</LinkBox>
							</ListItem>
						) ) }
					</List>
				</Box>
				<Box marginBottom="20px">
					<List spacing={ 2 }>
						{ musicMenuItems.map( item => (
							<ListItem paddingX="20px" fontSize="16px" key={ item.name }>
								<LinkBox>
									<NextLink href={ item.route } passHref>
										<LinkOverlay>
											<ListIcon
												as={ item.icon }
												color="white"
												marginRight="20px" />
											{ item.name }
										</LinkOverlay>
									</NextLink>
								</LinkBox>
							</ListItem>
						) ) }
					</List>
				</Box>
				<Divider color="gray.800" />
				<Box height="66%" overflowY="auto" paddingY="20px">
					<List spacing={ 2 }>
						{ playlist.map( item => (
							<ListItem paddingX="20px" key={ item }>
								<LinkBox>
									<NextLink href="/" passHref>
										<LinkOverlay>
											{ item }
										</LinkOverlay>
									</NextLink>
								</LinkBox>
							</ListItem>
						) ) }
					</List>
				</Box>
			</Box>
		</Box>
	)
}

export default Sidebar;
