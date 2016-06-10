THREE.RenderableObject=function(){this.id=0,this.object=null,this.z=0,this.renderOrder=0},THREE.RenderableFace=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.v3=new THREE.RenderableVertex,this.normalModel=new THREE.Vector3,this.vertexNormalsModel=[new THREE.Vector3,new THREE.Vector3,new THREE.Vector3],this.vertexNormalsLength=0,this.color=new THREE.Color,this.material=null,this.uvs=[new THREE.Vector2,new THREE.Vector2,new THREE.Vector2],this.z=0,this.renderOrder=0},THREE.RenderableVertex=function(){this.position=new THREE.Vector3,this.positionWorld=new THREE.Vector3,this.positionScreen=new THREE.Vector4,this.visible=!0},THREE.RenderableVertex.prototype.copy=function(e){this.positionWorld.copy(e.positionWorld),this.positionScreen.copy(e.positionScreen)},THREE.RenderableLine=function(){this.id=0,this.v1=new THREE.RenderableVertex,this.v2=new THREE.RenderableVertex,this.vertexColors=[new THREE.Color,new THREE.Color],this.material=null,this.z=0,this.renderOrder=0},THREE.RenderableSprite=function(){this.id=0,this.object=null,this.x=0,this.y=0,this.z=0,this.rotation=0,this.scale=new THREE.Vector2,this.material=null,this.renderOrder=0},THREE.Projector=function(){function e(){if(l===x){var e=new THREE.RenderableObject;return R.push(e),x++,l++,e}return R[l++]}function r(){if(p===T){var e=new THREE.RenderableVertex;return y.push(e),T++,p++,e}return y[p++]}function t(){if(u===w){var e=new THREE.RenderableFace;return H.push(e),w++,u++,e}return H[u++]}function n(){if(h===b){var e=new THREE.RenderableLine;return g.push(e),b++,h++,e}return g[h++]}function i(){if(v===S){var e=new THREE.RenderableSprite;return M.push(e),S++,v++,e}return M[v++]}function o(e,r){return e.renderOrder!==r.renderOrder?e.renderOrder-r.renderOrder:e.z!==r.z?r.z-e.z:e.id!==r.id?e.id-r.id:0}function a(e,r){var t=0,n=1,i=e.z+e.w,o=r.z+r.w,a=-e.z+e.w,s=-r.z+r.w;return i>=0&&o>=0&&a>=0&&s>=0?!0:0>i&&0>o||0>a&&0>s?!1:(0>i?t=Math.max(t,i/(i-o)):0>o&&(n=Math.min(n,i/(i-o))),0>a?t=Math.max(t,a/(a-s)):0>s&&(n=Math.min(n,a/(a-s))),t>n?!1:(e.lerp(r,t),r.lerp(e,1-n),!0))}var s,l,c,p,E,u,d,h,f,v,m,R=[],x=0,y=[],T=0,H=[],w=0,g=[],b=0,M=[],S=0,z={objects:[],lights:[],elements:[]},V=new THREE.Vector3,j=new THREE.Vector4,O=new THREE.Box3(new THREE.Vector3(-1,-1,-1),new THREE.Vector3(1,1,1)),L=new THREE.Box3,C=new Array(3),k=(new Array(4),new THREE.Matrix4),N=new THREE.Matrix4,W=new THREE.Matrix4,B=new THREE.Matrix3,F=new THREE.Frustum,P=new THREE.Vector4,A=new THREE.Vector4;this.projectVector=function(e,r){console.warn("THREE.Projector: .projectVector() is now vector.project()."),e.project(r)},this.unprojectVector=function(e,r){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),e.unproject(r)},this.pickingRay=function(e,r){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")};var D=function(){function e(e){R=e,x=R.material,T.getNormalMatrix(R.matrixWorld),f.length=0,v.length=0}function i(e){var r=e.position,t=e.positionWorld,n=e.positionScreen;t.copy(r).applyMatrix4(m),n.copy(t).applyMatrix4(N);var i=1/n.w;n.x*=i,n.y*=i,n.z*=i,e.visible=n.x>=-1&&n.x<=1&&n.y>=-1&&n.y<=1&&n.z>=-1&&n.z<=1}function o(e,t,n){c=r(),c.position.set(e,t,n),i(c)}function a(e,r,t){f.push(e,r,t)}function s(e,r){v.push(e,r)}function l(e,r,t){return e.visible===!0||r.visible===!0||t.visible===!0?!0:(C[0]=e.positionScreen,C[1]=r.positionScreen,C[2]=t.positionScreen,O.intersectsBox(L.setFromPoints(C)))}function p(e,r,t){return(t.positionScreen.x-e.positionScreen.x)*(r.positionScreen.y-e.positionScreen.y)-(t.positionScreen.y-e.positionScreen.y)*(r.positionScreen.x-e.positionScreen.x)<0}function u(e,r){var t=y[e],i=y[r];d=n(),d.id=R.id,d.v1.copy(t),d.v2.copy(i),d.z=(t.positionScreen.z+i.positionScreen.z)/2,d.renderOrder=R.renderOrder,d.material=R.material,z.elements.push(d)}function h(e,r,n){var i=y[e],o=y[r],a=y[n];if(l(i,o,a)!==!1&&(x.side===THREE.DoubleSide||p(i,o,a)===!0)){E=t(),E.id=R.id,E.v1.copy(i),E.v2.copy(o),E.v3.copy(a),E.z=(i.positionScreen.z+o.positionScreen.z+a.positionScreen.z)/3,E.renderOrder=R.renderOrder,E.normalModel.fromArray(f,3*e),E.normalModel.applyMatrix3(T).normalize();for(var s=0;3>s;s++){var c=E.vertexNormalsModel[s];c.fromArray(f,3*arguments[s]),c.applyMatrix3(T).normalize();var u=E.uvs[s];u.fromArray(v,2*arguments[s])}E.vertexNormalsLength=3,E.material=R.material,z.elements.push(E)}}var f=[],v=[],R=null,x=null,T=new THREE.Matrix3;return{setObject:e,projectVertex:i,checkTriangleVisibility:l,checkBackfaceCulling:p,pushVertex:o,pushNormal:a,pushUv:s,pushLine:u,pushTriangle:h}},G=new D;this.projectScene=function(c,R,x,T){u=0,h=0,v=0,z.elements.length=0,c.autoUpdate===!0&&c.updateMatrixWorld(),null===R.parent&&R.updateMatrixWorld(),k.copy(R.matrixWorldInverse.getInverse(R.matrixWorld)),N.multiplyMatrices(R.projectionMatrix,k),F.setFromMatrix(N),l=0,z.objects.length=0,z.lights.length=0,c.traverseVisible(function(r){if(r instanceof THREE.Light)z.lights.push(r);else if(r instanceof THREE.Mesh||r instanceof THREE.Line||r instanceof THREE.Sprite){var t=r.material;if(t.visible===!1)return;r.frustumCulled!==!1&&F.intersectsObject(r)!==!0||(s=e(),s.id=r.id,s.object=r,V.setFromMatrixPosition(r.matrixWorld),V.applyProjection(N),s.z=V.z,s.renderOrder=r.renderOrder,z.objects.push(s))}}),x===!0&&z.objects.sort(o);for(var H=0,w=z.objects.length;w>H;H++){var g=z.objects[H].object,b=g.geometry;if(G.setObject(g),m=g.matrixWorld,p=0,g instanceof THREE.Mesh){if(b instanceof THREE.BufferGeometry){var M=b.attributes,S=b.groups;if(void 0===M.position)continue;for(var O=M.position.array,L=0,C=O.length;C>L;L+=3)G.pushVertex(O[L],O[L+1],O[L+2]);if(void 0!==M.normal)for(var D=M.normal.array,L=0,C=D.length;C>L;L+=3)G.pushNormal(D[L],D[L+1],D[L+2]);if(void 0!==M.uv)for(var I=M.uv.array,L=0,C=I.length;C>L;L+=2)G.pushUv(I[L],I[L+1]);if(null!==b.index){var U=b.index.array;if(S.length>0)for(var H=0;H<S.length;H++)for(var q=S[H],L=q.start,C=q.start+q.count;C>L;L+=3)G.pushTriangle(U[L],U[L+1],U[L+2]);else for(var L=0,C=U.length;C>L;L+=3)G.pushTriangle(U[L],U[L+1],U[L+2])}else for(var L=0,C=O.length/3;C>L;L+=3)G.pushTriangle(L,L+1,L+2)}else if(b instanceof THREE.Geometry){var J=b.vertices,K=b.faces,Q=b.faceVertexUvs[0];B.getNormalMatrix(m);for(var X=g.material,Y=X instanceof THREE.MultiMaterial,Z=Y===!0?g.material:null,$=0,_=J.length;_>$;$++){var ee=J[$];if(V.copy(ee),X.morphTargets===!0)for(var re=b.morphTargets,te=g.morphTargetInfluences,ne=0,ie=re.length;ie>ne;ne++){var oe=te[ne];if(0!==oe){var ae=re[ne],se=ae.vertices[$];V.x+=(se.x-ee.x)*oe,V.y+=(se.y-ee.y)*oe,V.z+=(se.z-ee.z)*oe}}G.pushVertex(V.x,V.y,V.z)}for(var le=0,ce=K.length;ce>le;le++){var pe=K[le];if(X=Y===!0?Z.materials[pe.materialIndex]:g.material,void 0!==X){var Ee=X.side,ue=y[pe.a],de=y[pe.b],he=y[pe.c];if(G.checkTriangleVisibility(ue,de,he)!==!1){var fe=G.checkBackfaceCulling(ue,de,he);if(Ee!==THREE.DoubleSide){if(Ee===THREE.FrontSide&&fe===!1)continue;if(Ee===THREE.BackSide&&fe===!0)continue}E=t(),E.id=g.id,E.v1.copy(ue),E.v2.copy(de),E.v3.copy(he),E.normalModel.copy(pe.normal),fe!==!1||Ee!==THREE.BackSide&&Ee!==THREE.DoubleSide||E.normalModel.negate(),E.normalModel.applyMatrix3(B).normalize();for(var ve=pe.vertexNormals,me=0,Re=Math.min(ve.length,3);Re>me;me++){var xe=E.vertexNormalsModel[me];xe.copy(ve[me]),fe!==!1||Ee!==THREE.BackSide&&Ee!==THREE.DoubleSide||xe.negate(),xe.applyMatrix3(B).normalize()}E.vertexNormalsLength=ve.length;var ye=Q[le];if(void 0!==ye)for(var Te=0;3>Te;Te++)E.uvs[Te].copy(ye[Te]);E.color=pe.color,E.material=X,E.z=(ue.positionScreen.z+de.positionScreen.z+he.positionScreen.z)/3,E.renderOrder=g.renderOrder,z.elements.push(E)}}}}}else if(g instanceof THREE.Line){if(b instanceof THREE.BufferGeometry){var M=b.attributes;if(void 0!==M.position){for(var O=M.position.array,L=0,C=O.length;C>L;L+=3)G.pushVertex(O[L],O[L+1],O[L+2]);if(null!==b.index)for(var U=b.index.array,L=0,C=U.length;C>L;L+=2)G.pushLine(U[L],U[L+1]);else for(var He=g instanceof THREE.LineSegments?2:1,L=0,C=O.length/3-1;C>L;L+=He)G.pushLine(L,L+1)}}else if(b instanceof THREE.Geometry){W.multiplyMatrices(N,m);var J=g.geometry.vertices;if(0===J.length)continue;ue=r(),ue.positionScreen.copy(J[0]).applyMatrix4(W);for(var He=g instanceof THREE.LineSegments?2:1,$=1,_=J.length;_>$;$++)ue=r(),ue.positionScreen.copy(J[$]).applyMatrix4(W),($+1)%He>0||(de=y[p-2],P.copy(ue.positionScreen),A.copy(de.positionScreen),a(P,A)===!0&&(P.multiplyScalar(1/P.w),A.multiplyScalar(1/A.w),d=n(),d.id=g.id,d.v1.positionScreen.copy(P),d.v2.positionScreen.copy(A),d.z=Math.max(P.z,A.z),d.renderOrder=g.renderOrder,d.material=g.material,g.material.vertexColors===THREE.VertexColors&&(d.vertexColors[0].copy(g.geometry.colors[$]),d.vertexColors[1].copy(g.geometry.colors[$-1])),z.elements.push(d)))}}else if(g instanceof THREE.Sprite){j.set(m.elements[12],m.elements[13],m.elements[14],1),j.applyMatrix4(N);var we=1/j.w;j.z*=we,j.z>=-1&&j.z<=1&&(f=i(),f.id=g.id,f.x=j.x*we,f.y=j.y*we,f.z=j.z,f.renderOrder=g.renderOrder,f.object=g,f.rotation=g.rotation,f.scale.x=g.scale.x*Math.abs(f.x-(j.x+R.projectionMatrix.elements[0])/(j.w+R.projectionMatrix.elements[12])),f.scale.y=g.scale.y*Math.abs(f.y-(j.y+R.projectionMatrix.elements[5])/(j.w+R.projectionMatrix.elements[13])),f.material=g.material,z.elements.push(f))}}return T===!0&&z.elements.sort(o),z}};