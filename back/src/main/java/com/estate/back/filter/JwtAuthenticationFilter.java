package com.estate.back.filter;

import java.io.IOException;

import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

// Spring Securiy Filter Chain에 추가할 JWT 필터
// - Request 객체로부터 Header 정보를 받아와서 Header에 있는 Authorized 필드의 Bearer 토큰 값을 가져와서 JWT 검증
// - 접근주체의 권한을 확인하여 권한 등록

// JwtAuthenticationFilter 빠른수정하면 @Override 생성됨
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    // JwtAuthenticationFilter의 실제 동작
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

                try {

                    // Request 객체에서 Barer 토큰 값 가져오기
                    String token = parseBearerToken(request);
                    if (token == null) {
                        filterChain.doFilter(request, response);
                        return;
                    }

                } catch (Exception exception) {
                    exception.printStackTrace();
                }
                filterChain.doFilter(request, response); // request, response 넘겨줌 -> 안하면 동작을 안함
    }
    // Request 객체에서 Bearer 토큰 값을 가져오는 메서드
    private String parseBearerToken(HttpServletRequest request) {

        // Request 객체의 Header에서 Authorization 필드 값 추출
        String authorization = request.getHeader("Authorization");
        // Authorization 필드값 존재 여부 확인
        boolean hasAuthorization = StringUtils.hasText(authorization);
        if (!hasAuthorization) return null;
        // bearer 인증 여부 확인
        boolean isBearer = authorization.startsWith("Bearer "); // 띄워야함
        if (!isBearer) return null;

        // Authorization 필드값에서 토큰 추출
        String token = authorization.substring(7);
        return token;
    }
    
}
