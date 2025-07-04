/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

// import React, { useRef } from 'react'
import { useGLTF, Outlines } from "@react-three/drei";
import { useState } from "react";
import { useGameStore } from "../store/gameStore";
import { DoorRound } from "./components/DoorRound";
import { Wall } from "./components/Wall";
import { InstancedWall } from "./components/InstancedWall";
import { folder, useControls } from "leva";
import { Window } from "./components/Window";
import { InstancedWindow } from "./components/InstancedWindow";
import { StaticCollider } from "bvhecctrl";

export default function Kitchen(kitchenClues, ...props) {
	const { nodes, materials } = useGLTF("models/rooms/kitchen.glb");

	const [hoveredObject, setHoveredObject] = useState(null);
	const { interactWithObject, getObjectStatus } = useGameStore();
	const hoverableClues = Object.keys(kitchenClues["clues"]);

	const handlePointerOver = (objectId) => {
		if (!hoverableClues.includes(objectId)) return;
		setHoveredObject(objectId);
		document.body.style.cursor = "pointer";
	};

	const handlePointerOut = () => {
		setHoveredObject(null);
		document.body.style.cursor = "default";
	};

	const handleClick = (e, objectId) => {
		if (e && e.stopPropagation) {
			e.stopPropagation();
		}
		interactWithObject(objectId);
	};

	const getOutlineColor = (objectId) => {
		const status = getObjectStatus(objectId);
		if (status.isFound) return "#90ee90";
		if (status.isClue) return "#ffd700";
		return "aquamarine";
	};

	const { changeRoom } = useGameStore();
	const [hoveredDoor, setHoveredDoor] = useState(null);

	const handleDoorClick = (roomName) => {
		changeRoom(roomName);
	};

	const handleDoorHover = (doorName) => {
		setHoveredDoor(doorName);
		document.body.style.cursor = "pointer";
	};

	const handleDoorHoverOut = () => {
		setHoveredDoor(null);
		document.body.style.cursor = "default";
	};

	const {
		lWall1Px,
		lWall1Py,
		lWall1Pz,
		lWall1Rx,
		lWall1Ry,
		lWall1Rz,
		lWall2Px,
		lWall2Py,
		lWall2Pz,
		lWall2Rx,
		lWall2Ry,
		lWall2Rz,
		lWall3Px,
		lWall3Py,
		lWall3Pz,
		lWall3Rx,
		lWall3Ry,
		lWall3Rz,
		lWall4Px,
		lWall4Py,
		lWall4Pz,
		lWall4Rx,
		lWall4Ry,
		lWall4Rz,
		lWall5Px,
		lWall5Py,
		lWall5Pz,
		lWall5Rx,
		lWall5Ry,
		lWall5Rz,
		lWall6Px,
		lWall6Py,
		lWall6Pz,
		lWall6Rx,
		lWall6Ry,
		lWall6Rz,
		lWall7Px,
		lWall7Py,
		lWall7Pz,
		lWall7Rx,
		lWall7Ry,
		lWall7Rz,
		lWin1Px,
		lWin1Py,
		lWin1Pz,
		lWin1Rx,
		lWin1Ry,
		lWin1Rz,
		lWin2Px,
		lWin2Py,
		lWin2Pz,
		lWin2Rx,
		lWin2Ry,
		lWin2Rz,
		lWin3Px,
		lWin3Py,
		lWin3Pz,
		lWin3Rx,
		lWin3Ry,
		lWin3Rz,
	} = useControls({
		lWalls: folder(
			{
				// wall 1 Position
				lWall1Px: { value: 1.65, min: -10, max: 10, step: 0.01 },
				lWall1Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWall1Pz: { value: -3.2, min: -10, max: 10, step: 0.01 },
				// lWall 1 Rotation
				lWall1Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall1Ry: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall1Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// lWall 2 Position
				lWall2Px: { value: -5.8, min: -10, max: 10, step: 0.01 },
				lWall2Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWall2Pz: { value: -3.2, min: -10, max: 10, step: 0.01 },
				// lWall 2 Rotation
				lWall2Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall2Ry: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall2Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// lWall 3 Position
				lWall3Px: { value: 7.59, min: -10, max: 10, step: 0.01 },
				lWall3Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWall3Pz: { value: -1.3, min: -10, max: 10, step: 0.01 },
				// lWall 3 Rotation
				lWall3Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall3Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				lWall3Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// lWall 4 Position
				lWall4Px: { value: 7.59, min: -10, max: 10, step: 0.01 },
				lWall4Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWall4Pz: { value: 2.47, min: -10, max: 10, step: 0.01 },
				// lWall 4 Rotation
				lWall4Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall4Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				lWall4Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// lWall 5 Position
				lWall5Px: { value: 5.56, min: -10, max: 10, step: 0.01 },
				lWall5Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWall5Pz: { value: -3.2, min: -10, max: 10, step: 0.01 },
				// lWall 5 Rotation
				lWall5Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall5Ry: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall5Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// lWall 6 Position
				lWall6Px: { value: -7.2, min: -10, max: 10, step: 0.01 },
				lWall6Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWall6Pz: { value: 2.49, min: -10, max: 10, step: 0.01 },
				// lWall 6 Rotation
				lWall6Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall6Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				lWall6Rz: { value: 0, min: -3, max: 3, step: 0.01 },
				// lWall 7 Position
				lWall7Px: { value: -7.2, min: -10, max: 10, step: 0.01 },
				lWall7Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWall7Pz: { value: 6.38, min: -10, max: 10, step: 0.01 },
				// lWall 7 Rotation
				lWall7Rx: { value: 0, min: -3, max: 3, step: 0.01 },
				lWall7Ry: { value: Math.PI * 0.5, min: -3, max: 3, step: 0.01 },
				lWall7Rz: { value: 0, min: -3, max: 3, step: 0.01 },
			},
			{ collapsed: true }
		),
		Windows: folder(
			{
				lWin1Px: { value: -2.2, min: -10, max: 10, step: 0.01 },
				lWin1Py: { value: 0, min: -10, max: 10, step: 0.01 },
				lWin1Pz: { value: -3.1, min: -10, max: 10, step: 0.01 },
				// lWin 1 rotation
				lWin1Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				lWin1Ry: { value: 0, min: -10, max: 10, step: 0.01 },
				lWin1Rz: { value: 0, min: -10, max: 10, step: 0.01 },
				// lWin 2 position
				lWin2Px: { value: -7.3, min: -20, max: 20, step: 0.01 },
				lWin2Py: { value: 0, min: -20, max: 20, step: 0.01 },
				lWin2Pz: { value: -1.2, min: -20, max: 20, step: 0.01 },
				// lWin 2 rotation
				lWin2Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				lWin2Ry: { value: 1.57, min: -10, max: 10, step: 0.01 },
				lWin2Rz: { value: 0, min: -10, max: 10, step: 0.01 },
				// lWin 3 position
				lWin3Px: { value: 7.14, min: -20, max: 20, step: 0.01 },
				lWin3Py: { value: 0, min: -20, max: 20, step: 0.01 },
				lWin3Pz: { value: 6.12, min: -20, max: 20, step: 0.01 },
				// lWin 3 rotation
				lWin3Rx: { value: 0, min: -10, max: 10, step: 0.01 },
				lWin3Ry: { value: -1.57, min: -10, max: 10, step: 0.01 },
				lWin3Rz: { value: 0, min: -10, max: 10, step: 0.01 },
			},
			{ collapsed: true }
		),
	});

	return (
		<>
			<InstancedWall
				instances={[
					{
						position: [lWall1Px, lWall1Py, lWall1Pz],
						rotation: [lWall1Rx, lWall1Ry, lWall1Rz],
						scale: 2,
					},
					{
						position: [lWall2Px, lWall2Py, lWall2Pz],
						rotation: [lWall2Rx, lWall2Ry, lWall2Rz],
						scale: 2,
					},
					{
						position: [lWall3Px, lWall3Py, lWall3Pz],
						rotation: [lWall3Rx, lWall3Ry, lWall3Rz],
						scale: 2,
					},
					{
						position: [lWall4Px, lWall4Py, lWall4Pz],
						rotation: [lWall4Rx, lWall4Ry, lWall4Rz],
						scale: 2,
					},
				]}
			/>
			<StaticCollider>
				<mesh position={[0, 1, 4]} visible={true}>
					<boxGeometry args={[15, 3, 0.2]} />
					<meshBasicMaterial transparent opacity={0} />
				</mesh>
			</StaticCollider>
			<InstancedWindow
				instances={[
					{
						position: [lWin1Px, lWin1Py, lWin1Pz],
						rotation: [lWin1Rx, lWin1Ry, lWin1Rz],
						scale: 2,
					},
					{
						position: [lWin2Px, lWin2Py, lWin2Pz],
						rotation: [lWin2Rx, lWin2Ry, lWin2Rz],
						scale: 2,
					},
					{
						position: [lWin3Px, lWin3Py, lWin3Pz],
						rotation: [lWin3Rx, lWin3Ry, lWin3Rz],
						scale: 2,
					},
				]}
			/>
			<InstancedWall
				instances={[
					{
						position: [lWall5Px, lWall5Py, lWall5Pz],
						rotation: [lWall5Rx, lWall5Ry, lWall5Rz],
						scale: 2,
					},
					{
						position: [lWall6Px, lWall6Py, lWall6Pz],
						rotation: [lWall6Rx, lWall6Ry, lWall6Rz],
						scale: 2,
					},
					{
						position: [lWall7Px, lWall7Py, lWall7Pz],
						rotation: [lWall7Rx, lWall7Ry, lWall7Rz],
						scale: 2,
					},
				]}
			/>
			<DoorRound
				position={[6.66, 0, 2.3]}
				scale={3}
				rotation={[0, -Math.PI * 0.5, 0]}
				onPointerOver={() => handleDoorHover("hall")}
				onPointerOut={() => handleDoorHoverOut()}
				onClick={() => handleDoorClick("hall")}
				isHovered={hoveredDoor === "hall"}
			/>
			<StaticCollider>
				<group {...props} dispose={null}>
					{/* Large sack by the empty shelf */}

					<group
						position={[-5.715, 0, 2.03]}
						rotation={[-Math.PI, 0.95, -Math.PI]}
						onPointerOver={() => handlePointerOver("Sack")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "Sack")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube_Retopology002.geometry}
							material={materials.MI_Trim_Cloth}>
							{hoveredObject === "Sack" && hoverableClues.includes("Sack") && (
								<Outlines thickness={0.6} color={getOutlineColor("Sack")} />
							)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube_Retopology002_1.geometry}
							material={materials["MI_Trim_Furniture.001"]}
						/>
					</group>

					{/* Standing Keg to the right*/}
					<group
						position={[4.233, 0, -1.642]}
						onPointerEnter={() => handlePointerOver("standing-keg")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "standing-keg")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder.geometry}
							material={materials["MI_Trim_Furniture.004"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder_1.geometry}
							material={materials["MI_Trim_Metal.006"]}
						/>
					</group>

					{/* Middle standing keg */}
					<group
						position={[1.094, 0, -1.099]}
						onPointerEnter={() => handlePointerOver("standing-keg")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "standing-keg")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder054.geometry}
							material={materials["MI_Trim_Furniture.005"]}>
							{hoveredObject === "standing-keg" &&
								hoverableClues.includes("standing-keg") && (
									<Outlines
										thickness={0.6}
										color={getOutlineColor("standing-keg")}
									/>
								)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder054_1.geometry}
							material={materials["MI_Trim_Metal.007"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder054_2.geometry}
							material={materials["MI_Trim_Props_Vertex.001"]}>
							{hoveredObject === "standing-keg" &&
								hoverableClues.includes("standing-keg") && (
									<Outlines
										thickness={0.6}
										color={getOutlineColor("standing-keg")}
									/>
								)}
						</mesh>
					</group>

					{/* Pourkegs */}
					<group
						position={[1.776, 0, -2.524]}
						onPointerEnter={() => handlePointerOver("pourkegs")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "pourkegs")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube045.geometry}
							material={materials["MI_Trim_Furniture.006"]}>
							{hoveredObject === "pourkegs" &&
								hoverableClues.includes("pourkegs") && (
									<Outlines
										thickness={0.6}
										color={getOutlineColor("pourkegs")}
									/>
								)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube045_1.geometry}
							material={materials["MI_Trim_Metal.008"]}
						/>
					</group>

					{/* Bottle on Table */}
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Bottle_1.geometry}
						material={materials["MI_Trim_Props_Vertex.013"]}
						position={[-3.064, 0.804, 1.738]}
						onPointerEnter={() => handlePointerOver("Bottle")}
						onPointerOut={() => handlePointerOut()}
					/>

					{/* Wooden Bucket */}
					<group
						position={[3.199, 0, 2.733]}
						onPointerEnter={() => handlePointerOver("wooden-bucket")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "wooden-bucket")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder019.geometry}
							material={materials["MI_Trim_Furniture.012"]}>
							{hoveredObject === "wooden-bucket" &&
								hoverableClues.includes("wooden-bucket") && (
									<Outlines
										thickness={0.6}
										color={getOutlineColor("wooden-bucket")}
									/>
								)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder019_1.geometry}
							material={materials["MI_Trim_Metal.016"]}
						/>
					</group>
					{/* Carrots */}
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Carrot.geometry}
						material={materials["MI_Trim_Props_Vertex.015"]}
						position={[4.062, 0.933, 2.057]}
						rotation={[0, 0.65, 1.313]}
					/>
					{/* Cauldron */}
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Cauldron.geometry}
						material={materials["MI_Trim_Metal.022"]}
						position={[4.017, 0, 0.375]}
						onPointerEnter={() => handlePointerOver("cauldron")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "cauldron")}>
						{hoveredObject === "cauldron" &&
							hoverableClues.includes("cauldron") && (
								<Outlines thickness={0.6} color={getOutlineColor("cauldron")} />
							)}
					</mesh>

					{/* Top Chair */}
					<group position={[-2.308, 0, 0.875]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube180.geometry}
							material={materials["MI_Trim_Furniture.014"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube180_1.geometry}
							material={materials["MI_Trim_Metal.024"]}
						/>
					</group>

					{/* Chalice */}
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Chalice.geometry}
						material={materials["MI_Trim_Metal.025"]}
						position={[-1.902, 0.815, 1.671]}
					/>

					{/* Chandelier */}
					<group position={[-0.024, 3.57, 1.176]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder092.geometry}
							material={materials["MI_Trim_Metal.026"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder092_1.geometry}
							material={materials["MI_Trim_Furniture.015"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder092_2.geometry}
							material={materials["MI_Trim_Props_Vertex.016"]}
						/>
					</group>

					{/* Wooden Crate */}
					<group position={[-5.742, 0.042, -0.335]} scale={0.78}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube017.geometry}
							material={materials["MI_Trim_Furniture.018"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube017_1.geometry}
							material={materials["MI_Trim_Metal.029"]}
						/>
					</group>

					{/* Carrot Crates */}
					<group
						position={[-0.321, 0.863, -2.454]}
						onPointerEnter={() => handlePointerOver("vegetable-crate")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "vegetable-crate")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder057.geometry}
							material={materials["MI_Trim_Furniture.020"]}>
							{hoveredObject === "vegetable-crate" &&
								hoverableClues.includes("vegetable-crate") && (
									<Outlines
										thickness={0.6}
										color={getOutlineColor("vegetable-crate")}
									/>
								)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder057_1.geometry}
							material={materials["MI_Trim_Metal.031"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder057_2.geometry}
							material={materials["MI_Trim_Props_Vertex.017"]}
						/>
					</group>

					{/* Carrot Crates Left */}
					<group position={[-3.27, 0.877, -2.49]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder018.geometry}
							material={materials["MI_Trim_Props_Vertex.018"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder018_1.geometry}
							material={materials["MI_Trim_Furniture.021"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder018_2.geometry}
							material={materials["MI_Trim_Metal.032"]}
						/>
					</group>

					{/* Carrots */}
					<group position={[-2.444, 0.866, -2.536]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube127.geometry}
							material={materials["MI_Trim_Furniture.022"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube127_1.geometry}
							material={materials["MI_Trim_Metal.033"]}
						/>
					</group>

					{/* Mug */}
					<group
						position={[-3.215, 0.816, 1.402]}
						onPointerEnter={() => handlePointerOver("Mug")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "Mug")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder068.geometry}
							material={materials["MI_Trim_Metal.036"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder068_1.geometry}
							material={materials["MI_Trim_Furniture.023"]}>
							{hoveredObject === "Mug" && hoverableClues.includes("Mug") && (
								<Outlines thickness={0.6} color={getOutlineColor("Mug")} />
							)}
						</mesh>
					</group>

					{/* Pot lid */}
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Pot_1_Lid.geometry}
						material={materials["MI_Trim_Metal.039"]}
						position={[-1.424, 0.827, 1.592]}
					/>

					{/* Scroll */}
					<group
						position={[-1.165, 0.8, 1.841]}
						onPointerEnter={() => handlePointerOver("scroll")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "scroll")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube152.geometry}
							material={materials.MI_Page_Empty}>
							{hoveredObject === "scroll" &&
								hoverableClues.includes("scroll") && (
									<Outlines thickness={0.6} color={getOutlineColor("scroll")} />
								)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube152_1.geometry}
							material={materials["MI_Trim_Props_Vertex.024"]}>
							{hoveredObject === "scroll" &&
								hoverableClues.includes("scroll") && (
									<Outlines thickness={0.6} color={getOutlineColor("scroll")} />
								)}
						</mesh>
					</group>

					{/* Empty Shelf */}
					<group position={[-6.112, 0.607, 0.999]} rotation={[0, 1.566, 0]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder032.geometry}
							material={materials["MI_Trim_Metal.041"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder032_1.geometry}
							material={materials["MI_Trim_Furniture.029"]}
						/>
					</group>
					{/* 
			Potions */}
					<group
						position={[3.275, 0, -2.537]}
						rotation={[0, -0.376, 0]}
						onPointerEnter={() => handlePointerOver("potions")}
						onPointerOut={() => handlePointerOut()}
						onClick={(e) => handleClick(e, "potions")}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube166.geometry}
							material={materials["MI_Trim_Props_Vertex.026"]}>
							{hoveredObject === "potions" &&
								hoverableClues.includes("potions") && (
									<Outlines
										thickness={0.6}
										color={getOutlineColor("potions")}
									/>
								)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube166_1.geometry}
							material={materials["MI_Trim_Metal.042"]}>
							{hoveredObject === "potions" &&
								hoverableClues.includes("potions") && (
									<Outlines
										thickness={0.6}
										color={getOutlineColor("potions")}
									/>
								)}
						</mesh>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube166_2.geometry}
							material={materials["MI_Trim_Furniture.031"]}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.SmallBottles_1.geometry}
						material={materials["MI_Trim_Props_Vertex.028"]}
						position={[-2.299, 0.807, 1.528]}
						rotation={[0, 0.168, 0]}
					/>
					<group position={[-2.781, 0, -2.538]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder094.geometry}
							material={materials["MI_Trim_Metal.043"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder094_1.geometry}
							material={materials["MI_Trim_Furniture.033"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder094_2.geometry}
							material={materials["MI_Banner.004"]}
						/>
					</group>
					<group position={[0, 0, -2.52]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube212.geometry}
							material={materials["MI_Trim_Metal.044"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube212_1.geometry}
							material={materials["MI_Trim_Furniture.034"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube212_2.geometry}
							material={materials["MI_Banner.005"]}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Table_Fork.geometry}
						material={materials["MI_Trim_Metal.045"]}
						position={[-2.544, 0.816, 1.874]}
						rotation={[0, 0.099, 0]}
					/>
					<group position={[-2.33, 0, 1.502]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube084.geometry}
							material={materials["MI_Trim_Furniture.036"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube084_1.geometry}
							material={materials["MI_Trim_Metal.047"]}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Table_Plate.geometry}
						material={materials["MI_Trim_Metal.048"]}
						position={[-2.315, 0.81, 1.824]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Table_Spoon.geometry}
						material={materials["MI_Trim_Metal.049"]}
						position={[-2.369, 0.828, 1.618]}
						rotation={[0, -1.567, 0]}
						scale={0.883}
					/>
					<group position={[4.054, 0, 2.113]} rotation={[0, 1.57, 0]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube163.geometry}
							material={materials["MI_Trim_Furniture.039"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube163_1.geometry}
							material={materials["MI_Trim_Metal.053"]}
						/>
					</group>
					<group
						position={[-2.308, 0, 2.034]}
						rotation={[-Math.PI, 0.032, -Math.PI]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube003.geometry}
							material={materials["MI_Trim_Furniture.014"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube003_1.geometry}
							material={materials["MI_Trim_Metal.024"]}
						/>
					</group>
					<group position={[-1.398, 0, -2.386]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder001.geometry}
							material={materials["MI_Trim_Furniture.005"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder001_1.geometry}
							material={materials["MI_Trim_Metal.007"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder001_2.geometry}
							material={materials["MI_Trim_Props_Vertex.001"]}
						/>
					</group>
					<group position={[0.464, 0.877, -2.49]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder003.geometry}
							material={materials["MI_Trim_Props_Vertex.018"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder003_1.geometry}
							material={materials["MI_Trim_Furniture.021"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cylinder003_2.geometry}
							material={materials["MI_Trim_Metal.032"]}
						/>
					</group>
					<group position={[-5.659, 0, -2.137]} rotation={[0, 0.962, 0]}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube004.geometry}
							material={materials["MI_Trim_Props_Vertex.026"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube004_1.geometry}
							material={materials["MI_Trim_Metal.042"]}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube004_2.geometry}
							material={materials["MI_Trim_Furniture.031"]}
						/>
					</group>
					<group
						position={[-5.715, 0, 2.678]}
						rotation={[-Math.PI, 0.95, -Math.PI]}
						scale={0.437}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube_Retopology001.geometry}
							material={materials.MI_Trim_Cloth}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube_Retopology001_1.geometry}
							material={materials["MI_Trim_Furniture.001"]}
						/>
					</group>
					<group
						position={[-5.982, 0, 2.435]}
						rotation={[0, -1.288, 0]}
						scale={0.514}>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube_Retopology003.geometry}
							material={materials.MI_Trim_Cloth}
						/>
						<mesh
							castShadow
							receiveShadow
							geometry={nodes.Cube_Retopology003_1.geometry}
							material={materials["MI_Trim_Furniture.001"]}
						/>
					</group>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Table_Plate001.geometry}
						material={materials["MI_Trim_Metal.048"]}
						position={[-2.308, 0.81, 1.203]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Table_Fork001.geometry}
						material={materials["MI_Trim_Metal.045"]}
						position={[-2.05, 0.816, 1.155]}
						rotation={[Math.PI, -0.004, Math.PI]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Table_Spoon001.geometry}
						material={materials["MI_Trim_Metal.049"]}
						position={[-2.267, 0.828, 1.426]}
						rotation={[0, 1.495, 0]}
						scale={0.883}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Chalice001.geometry}
						material={materials["MI_Trim_Metal.025"]}
						position={[-2.674, 0.821, 1.367]}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Carrot001.geometry}
						material={materials["MI_Trim_Props_Vertex.015"]}
						position={[4.062, 0.933, 1.797]}
						rotation={[0, 0.65, 1.313]}
						scale={0.798}
					/>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Carrot002.geometry}
						material={materials["MI_Trim_Props_Vertex.015"]}
						position={[4.062, 0.933, 2.416]}
						rotation={[Math.PI, -0.37, -1.829]}
						scale={0.798}
					/>
				</group>
			</StaticCollider>
		</>
	);
}

useGLTF.preload("models/rooms/kitchen.glb");
