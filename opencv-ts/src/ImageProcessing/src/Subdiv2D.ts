import { MatVector } from "../../core/src/MatVector";
import { Point } from "../../core/src/Point";
import { Rect } from "../../core/src/Rect";

type NEXT_AROUND_ORG = 0x00;
type NEXT_AROUND_DST = 0x22;
type PREV_AROUND_ORG = 0x11;
type PREV_AROUND_DST = 0x33;
type NEXT_AROUND_LEFT = 0x13;
type NEXT_AROUND_RIGHT = 0x31;
type PREV_AROUND_LEFT = 0x20;
type PREV_AROUND_RIGHT = 0x02;

export type EdgeType =
    | NEXT_AROUND_ORG
    | NEXT_AROUND_DST
    | PREV_AROUND_ORG
    | PREV_AROUND_DST
    | NEXT_AROUND_LEFT
    | NEXT_AROUND_RIGHT
    | PREV_AROUND_LEFT
    | PREV_AROUND_RIGHT;

export interface IEdgeType {
    NEXT_AROUND_ORG: NEXT_AROUND_ORG;
    NEXT_AROUND_DST: NEXT_AROUND_DST;
    PREV_AROUND_ORG: PREV_AROUND_ORG;
    PREV_AROUND_DST: PREV_AROUND_DST;
    NEXT_AROUND_LEFT: NEXT_AROUND_LEFT;
    NEXT_AROUND_RIGHT: NEXT_AROUND_RIGHT;
    PREV_AROUND_LEFT: PREV_AROUND_LEFT;
    PREV_AROUND_RIGHT: PREV_AROUND_RIGHT;
}

export interface QuadEdge {
    new (): QuadEdge;
    new (edgeidx: number): QuadEdge;
    isfree(): boolean;
    next: QuadEdge;
    pt: number;
}

export interface Vertex {
    new (): Vertex;
    new (pt: Point, _isvirtual: boolean, _firstEdge?: number): Vertex;
    isfree(): boolean;
    isvirtual(): boolean;
    firstEdge: number;
    pt: Point;
}

export interface Subdiv2D {
    new (): Subdiv2D;
    new (rect: Rect): Subdiv2D;
    calcVoronoi(): void;
    checkSubdiv(): void;
    clearVoronoi(): void;
    connectEdges(edgeA: number, edgeB: number): void;
    deleteEdge(edge: number): void;
    deletePoint(vtx: number): void;
    /**
     * Returns the edge origin
     * @param edge Subdivision edge ID.
     * @param dstpt Output vertex location
     * @returns vertex ID
     */
    edgeDst(edge: number, dstpt: Point): number;
    /**
     * Returns the edge origin
     * @param edge Subdivision edge ID.
     * @param orgpt Output vertex location
     * @returns vertex ID
     */
    edgeOrg(edge: number, orgpt: Point): number;
    /**
     * Finds the subdivision vertex closest to the given point
     * @param pt Input point
     * @param nearestPt Output subdivision vertex point
     * @returns vertex ID.
     */
    findNearest(pt: Point, nearestPt: Point): number;
    /**
     * Returns one of the edges related to the given edge
     * @param edge Subdivision edge ID
     * @param nextEdgeType Parameter specifying which of the related edges to return. The following values are possible
     *      - NEXT_AROUND_ORG next around the edge origin ( eOnext on the picture below if e is the input edge)
     *      - NEXT_AROUND_DST next around the edge vertex ( eDnext )
     *      - PREV_AROUND_ORG previous around the edge origin (reversed eRnext )
     *      - PREV_AROUND_DST previous around the edge destination (reversed eLnext )
     *      - NEXT_AROUND_LEFT next around the left facet ( eLnext )
     *      - NEXT_AROUND_RIGHT next around the right facet ( eRnext )
     *      - PREV_AROUND_LEFT previous around the left facet (reversed eOnext )
     *      - PREV_AROUND_RIGHT previous around the right facet (reversed eDnext )
     * @returns edge ID related to the input edge
     */
    getEdge(edge: number, nextEdgeType: EdgeType): number;
    /**
     * Returns a list of all edges
     * @param edgeList Output vector
     */
    getEdgeList(edgeList: MatVector): void;
    /**
     * Returns a list of the leading edge ID connected to each triangle
     * The function gives one edge ID for each triangle
     * @param leadingEdgeList Output vector
     */
    getLeadingEdgeList(leadingEdgeList: MatVector): void;
    /**
     * Returns a list of all triangles.
     * @param triangleList Output vector
     */
    getTriangleList(triangleList: MatVector): void;
    /**
     *Returns vertex location from vertex ID.
     * @param vertex vertex ID.
     * @param firstEdge Optional. The first edge ID which is connected to the vertex.
     * @returns vertex (x,y)
     */
    getVertex(vertex: number, firstEdge?: number): Point;
    /**
     * Returns a list of all Voronoi facets.
     * @param idx Vector of vertices IDs to consider. For all vertices you can pass empty vector
     * @param facetList Output vector of the Voronoi facets.
     * @param facetCenters Output vector of the Voronoi facets center points
     */
    getVoronoiFacetList(
        idx: MatVector,
        facetList: Array<Point>,
        facetCenters: Array<Point>
    ): void;
    /**
     * Creates a new empty Delaunay subdivision
     */
    initDelaunay(): void;
    /**
     * Insert a single point into a Delaunay triangulation
     * @param pt Point to insert
     * @returns the ID of the point.
     */
    insert(pt: Point): number;
    /**
     * Insert multiple points into a Delaunay triangulation
     * @param ptvec Points to insert
     */
    insert(ptvec: Array<Point>): void;
    isRightOf(pt: Point, edge: number): number;
    /**
     * Returns the location of a point within a Delaunay triangulation
     * @param pt Point to locate
     * @param edge Output edge that the point belongs to or is located to the right of it
     * @param vertex Optional output vertex the input point coincides with
     */
    locate(pt: Point, edge: number, vertex: number): number;
    newEdge(): number;
    newPoint(pt: Point, isvirtual: boolean, firstEdge?: number): number;
    /**
     * Returns next edge around the edge origin
     * @param edge Subdivision edge ID
     * @returns an integer which is next edge ID around the edge origin: eOnext on the picture above if e is the input edge).
     */
    nextEdge(edge: number): number;
    /**
     * Returns another edge of the same quad-edge
     * @param edge Subdivision edge ID
     * @param rotate Parameter specifying which of the edges of the same quad-edge as the input one to return. The following values are possible:
     *      0 - the input edge ( e on the picture below if e is the input edge)
     *      1 -   the rotated edge ( eRot )
     *      2 - the reversed edge (reversed e (in green))
     *      3 - the reversed rotated edge (reversed eRot (in green))
     * @returns one of the edges ID of the same quad-edge as the input edge
     */
    rotateEdge(edge: number, rotate: number): number;
    setEdgePoints(edge: number, orgPt: number, dstPt: number): void;
    splice(edgeA: number, edgeB: number): void;
    swapEdges(edge: number): void;
    symEdge(edge: number): void;
    bottomRight: Point;
    freePoint: number;
    qedges: Array<QuadEdge>;
    recentEdge: number;
    topLeft: Point;
    validGeometry: boolean;
    vtx: Array<Vertex>;
}
