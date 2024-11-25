<h3>Laminar Boundary Layer</h3>

<p>For defining the boundary layer (i.e., laminar boundary layer or turbulent boundary layer) consider the flow of a fluid, having free-stream velocity (U), over a smooth thin plate which is flat and placed parallel to the direction for free stream of fluid, as shown in Fig 1. Let us consider the flow with zero pressure gradient on one side of the plate, which is stationary.</p>

<p style="text-align: center;"><img src="./images/fig1.png" style="width: 70%;"></p>
$$ Fig\ 1.\ \ Flow\ over\ a\ plate $$

<p>The velocity of fluid on the surface of the plate should be equal to the velocity of the plate. But plate is stationary and hence velocity of fluid on the surface of the plate is zero. But at a distance away from the plate, the fluid is having certain velocity (U). Thus a velocity gradient is set up in the fluid near the surface of the plate. This velocity gradient develops shear resistance, which retards the fluid. Thus the fluid with a uniform free stream velocity (U) is retarded in the vicinity of the solid surface of the plate and the boundary layer region begins at the sharp leading edge. At subsequent points downstream, the leading edge, the boundary layer region increases because the retarded fluid is further retarded. This is also referred as the growth of boundary layer. Near the leading edge of the surface of the plate, where the thickness is small, the flow in the boundary layer is laminar though the main flow is turbulent. This layer of the fluid is said to be laminar boundary layer. This is shown by AE in Fig 1. The length of the plate from the leading edge, upto which laminar boundary layer exists, is called laminar zone. This is also referred as the growth of boundary layer. Near the leading edge of the surface of the plate, where the thickness is small, the flow in the boundary layer is laminar though the main flow is turbulent. This layer of the fluid is said to be laminar boundary layer. This is shown by AE in Fig 1. The length of the plate from the leading edge, upto which laminar boundary layer exists, is called laminar zone. This is shown by distance AB. The distance of B from leading edge is obtained from Reynold number equal to 5 * 10<sup>5</sup> for a plate. Because, upto this Reynold number the boundary layer is laminar. The Reynold number is given by</p>

$$ (R_e)_x = \frac{U x}{\nu} $$

where
<ul>
    <li>x = Distance from leading edge,</li>
    <li>U = Free-stream velocity of fluid,</li>
    <li>&#957; = Kinematic viscosity of fluid.</li>
</ul>

<p>Hence for laminar boundary layer, we have</p>

$$ 5 \times 10^5 = \frac{U x}{\nu} \ \ \ \ \ ...(1) $$

<p>If the values of U and &#957; are known, x or the distance from the leading edge upto which laminar boundary layer exists can be calculated.</p>


<h3>Boundary Layer Thickness (&#948;)</h3>

<p>It is defined as the distance from the boundary of the solid body measured in the y-direction to the point, where the velocity of the fluid is approximately equal to 0.99 times the free stream velocity (U) of the fluid. It is denoted by the symbol &#948;. For laminar and turbulent zones it is denoted as:</p>

<ol>
    <li>&#948;<sub>lam</sub> = Thickness of laminar boundary layer,</li>
    <li>&#948;<sub>tur</sub> = Thickness of turbulent boundary layer, and</li>
    <li>&#948;<sup>'</sup> = Thickness of laminar sub-layer.</li>
</ol>

<h3>Displacement Thickness (&#948;<sup>*</sup>)</h3>

<p>It is defined as the distance, measured perpendicular to the boundary of the solid body, by which the boundary should be displaced to compensate for the reduction in flow rate on account of boundary layer formation. It is denoted by &#948;<sup>*</sup>. It is also defined as:</p>
<p>"The distance perpendicular to the boundary, by which the free-stream is displaced due to the formation of boundary layer."</p>

<h4>Expression for &#948;<sup>*</sup></h4>

<p style="text-align: center;"><img src="./images/fig2.png" style="width: 70%;"></p>
$$ Fig\ 2.\ \ Displacement\ thickness $$

<p>Consider the flow of a fluid having free-stream velocity equal to U over a thin smooth plate as shown in Fig 2. At a distance x from the leading edge consider a section 1-1. The velocity of fluid at B is zero and at C, which lies on the boundary layer, is U. Thus velocity varies from zero at B to U at C, where BC is equal to the thickness of boundary layer i.e.,</p>
<p>Distance BC = &#948;</p>

<p>At the section 1-1, consider an elemental strip.</p>

<p>Let</p>
<ul>
    <li>y = distance of elemental strip from the plate,</li>
    <li>dy = thickness of the elemental strip,</li>
    <li>u = velocity of fluid at the elemental strip,</li>
    <li>b = width of plate.</li>
</ul>

<p>Then area of elemental strip, dA = b * dy</p>

<p>Mass of fluid per second flowing through elemental strip = &#961; * Velocity * Area of elemental strip</p>
<p>= &#961;u * dA = &#961;u * b * dy</p>

<p>If there had been no plate, then the fluid would have been flowing with a constant velocity equal to free-stream velocity (U) at the section 1-1. Then mass of fluid flowing per second through elemental strip would have been</p>
<p>= &#961; * Velocity * Area = &#961; * U * b * dy</p>

<p>As U is more than u, hence due to the presence of the plate and consequently due to the formation of the boundary layer, there will be a reduction in mass flowing per second through the elemental strip.</p>

<p>This reduction in mass/sec flowing through elemental strip</p>
<p>= mass/sec given by equation (ii) - mass/sec given by equation (i)</p>
<p>= &#961;Ubdy - &#961;ubdy = &#961;b(U - u)dy</p>

<p>Total reduction in mass of fluid/sec flowing through BC due to plate</p>
<p>$$ = \int_{0}^{\delta} \rho b(U - u)dy = \rho b \int_{0}^{\delta} (U - u)dy $$</p>
<p>[If fluid is incompressible]</p>

<p>Let the plate is displaced by a distance &#948;<sup>*</sup> and velocity of flow for the distance &#948;<sup>*</sup> is equal to the free-stream velocity (i.e., U). Loss of mass of fluid/sec flowing through the distance &#948;<sup>*</sup></p>

<p>= &#961; * Velocity * Area</p>
<p>= &#961; * U * &#948;<sup>*</sup> * b</p>

<p>Equating equation (iii) and (iv), we get</p>
<p>$$ \rho b \int_{0}^{\delta}(U-u)dy = \rho \times U \times \delta^{*} \times b $$</p>
<p>Cancelling &#961;b from both sides, we have</p>
<p>$$ \int_{0}^{\delta}(U-u)dy = U\times\delta^{*} $$</p>
<p>$$ \delta^{*} = \frac{1}{U}\int_{0}^{\delta}(U-u)dy = \int_{0}^{\delta}\frac{(U-u)dy}{U} $$</p>
<p>[U is constant and can be taken inside the integral]</p>
<p>$$ \delta^{*} = \int_{0}^{\delta}(1-\frac{u}{U})dy $$</p>

<h3>Momentum Thickness (&#952;)</h3>
<p>Momentum thickness is defined as the distance, measured perpendicular to the boundary of the solid body, by which the boundary should be displaced to compensate for the reduction in momentum of the flowing fluid on account of boundary layer formation. It is denoted by &#952;.</p>

<p>Consider the flow over a plate as shown in Fig 2. Consider the section 1-1 at a distance x from the leading edge. Take an elemental strip at a distance y from the plate having thickness (dy). The mass of fluid flowing per second through this elemental strip is given by equation (i) and is equal to &#961;ubdy.</p>

<p>Momentum of this fluid = Mass * Velocity = (&#961;ubdy)u</p>
<p>Momentum of this fluid in the absence of boundary layer = (&#961;ubdy)U</p>
<p>Loss of momentum through elemental strip = (&#961;ubdy)U - (&#961;ubdy)u = &#961;bu(U-u)dy</p>

<p>Total loss of momentum/sec through BC = <span style="display: inline-block;"> $$ \int_{0}^{\delta}pbu(U-u)dy \ \ \ \ \ ...(2) </span></p>

<p>Let θ = distance by which plate is displaced when the fluid is flowing with a constant velocity U</p>
<p>Loss of momentum/sec of fluid flowing through distance θ with a velocity U</p>
<p>= Mass of fluid through &#952; * velocity</p>
<p>= (&#961; * area * velocity) * velocity</p>
<p>= [&#961; * &#952; * b * U] * U</p>
<p>= &#961; &#952;bU<sup>2</sup></p>

<p>Equating equations (2) and (1), we have</p>
<p>$$ \rho \theta b U^2 = \int_{0}^{\delta}\rho bu(U-u)dy = \rho b\int_{0}^{\delta}u(U-u)dy\]</p>
<p>$$ \theta U^2 = \int_{0}^{\delta}u(U-u)dy $$</p>
<p>$$ θ = \frac{1}{U^2}\int_{0}^{\delta}u(U-u)dy = \int_{0}^{\delta}\frac{u(U-u)dy}{U^2} $$</p>
<p>$$ θ = \int_{0}^{\delta}\frac{u}{U}[1-\frac{u}{U}]dy $$</p>


<h3>Energy Thickness (&#948;<sup>**</sup>)</h3>
<p>It is defined as the distance measured perpendicular to the boundary of the solid body, by which the boundary should be displaced to compensate for the reduction in kinetic energy of the flowing fluid on account of boundary layer formation. It is denoted by &#948;<sup>**</sup>.</p>

<p>Consider the flow over the plate as shown in Fig 2. having section 1-1 at a distance x from the leading edge. The mass of fluid flowing per second through the elemental strip of thickness dy at a distance y from the plate as given by equation (i) = &#961;ubdy.</p>

<p>Kinetic energy of this fluid = 1/2 * mass * velocity<sup>2</sup> = (&#961;ubdy)u<sup>2</sup></p>

<p>Kinetic energy of this fluid in the absence of boundary layer</p>
<p>$$ = \frac{1}{2}(\rho ubdy)U^2 $$</p>

<p>Loss of K.E. through elemental strip</p>
<p>$$ = \frac{1}{2}(\rho ubdy)U^2 - \frac{1}{2}(\rho ubdy)u^2 = \frac{1}{2}\rho ub(U^2 - u^2)dy $$</p>

<p>Total loss of K.E. of fluid passing through BC</p>
<p>$$ = \int_{0}^{\delta}\frac{1}{2}\rho ub(U^2 - u^2)dy = \frac{1}{2}pb\int_{0}^{\delta}u(U^2 - u^2)dy $$ </p>

<p>Let &#948;<sup>**</sup> = distance by which the plate is displaced to compensate for the reduction in K.E.</p>

<p>Loss of K.E. through δ** of fluid flowing with velocity U</p>
<p>$$ = \frac{1}{2}(mass) * velocity^2 = \frac{1}{2}(\rho * area * velocity) * velocity^2 $$</p>
<p>$$ = \frac{1}{2}(\rho * b * \delta^{**} × U) × U^2 $$</p>
<p>$$ = \frac{1}{2}\rho b \delta^{**} U^3 $$</p>

<p>Equating the two losses of K.E., we get</p>
<p>$$ \frac{1}{2}\rho b \rho^{**} U^3 = \frac{1}{2}\rho b \int_{0}^{\delta}u(U^2 - u^2)dy $$</p>
<p>$$ \delta^{**} = \frac{1}{U^3}\int_{0}^{\delta}u(U^2 - u^2)dy $$</p>
<p>$$ \therefore \delta^{**} = \int_{0}^{\delta}\frac{u}{U}(1 - \frac{u^2}{U^2})dy $$</p>